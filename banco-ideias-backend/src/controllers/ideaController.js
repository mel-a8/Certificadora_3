import { db } from "../config/firebaseConfig.js";
import { Timestamp } from "firebase-admin/firestore";

// Helper function to get the 'ideias' subcollection for a specific user
const getIdeasCollection = (userId) => {
  return db.collection("users").doc(userId).collection("ideias");
};

// CREATE a new idea for a user
export const createIdea = async (req, res) => {
  try {
    const userId = req.user.uid; // Fixed: was destructuring userId from uid string
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .send({ message: "Title and description are required" });
    }

    const newIdea = {
      title,
      description,
      datetime: Timestamp.now(), // Use Firebase server timestamp
    };

    const ideasCollection = db
      .collection("users")
      .doc(userId)
      .collection("ideias");
    const docRef = await ideasCollection.add(newIdea);

    res.status(201).send({ id: docRef.id, ...newIdea });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// READ all ideas for the logged-in user
export const getMyIdeas = async (req, res) => {
  try {
    const userId = req.user.uid;
    const ideasCollection = getIdeasCollection(userId);

    const snapshot = await ideasCollection.orderBy("datetime", "desc").get();

    const ideas = [];
    snapshot.forEach((doc) => {
      ideas.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).send(ideas);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// READ all ideas for a user
export const getAllIdeasForUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const ideasCollection = getIdeasCollection(userId);

    const snapshot = await ideasCollection.orderBy("datetime", "desc").get();

    const ideas = [];
    snapshot.forEach((doc) => {
      ideas.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).send(ideas);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getAllIdeas = async (req, res) => {
  // We know this user is an admin because the 'isAdmin' middleware passed
  try {
    // This is a more complex query (collection group query)
    const ideasSnapshot = await db.collectionGroup("ideias").get();
    const allIdeas = [];
    const userIds = new Set();

    ideasSnapshot.forEach((doc) => {
      // doc.ref.parent.parent.id gives the userId (parent document of the subcollection)
      const userId = doc.ref.parent.parent ? doc.ref.parent.parent.id : null;
      if (userId) {
        userIds.add(userId);
      }
      allIdeas.push({ id: doc.id, userId, ...doc.data() });
    });

    // Fetch user details efficiently
    const userMap = {};
    if (userIds.size > 0) {
      const userRefs = Array.from(userIds).map((id) =>
        db.collection("users").doc(id)
      );
      
      // db.getAll() is available in firebase-admin
      const usersSnapshots = await db.getAll(...userRefs);

      usersSnapshots.forEach((doc) => {
        if (doc.exists) {
          userMap[doc.id] = doc.data().name;
        }
      });
    }

    // Merge user name into ideas
    const mergedIdeas = allIdeas.map((idea) => ({
      ...idea,
      userName: userMap[idea.userId] || "John Doe",
    }));

    res.status(200).send(mergedIdeas);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// READ a single idea
export const getIdea = async (req, res) => {
  try {
    const userId = req.user.uid;
    const { ideaId } = req.params;
    const ideaDoc = await db
      .collection("users")
      .doc(userId)
      .collection("ideias")
      .doc(ideaId)
      .get();

    if (!ideaDoc.exists) {
      return res.status(404).send({ message: "Idea not found" });
    }

    res.status(200).send({ id: ideaDoc.id, ...ideaDoc.data() });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// UPDATE an idea
export const updateIdea = async (req, res) => {
  try {
    const userId = req.user.uid;
    const { ideaId } = req.params;
    const { title, description } = req.body;

    const ideaRef = getIdeasCollection(userId).doc(ideaId);

    // Only update fields that are provided
    const updates = {};
    if (title) updates.title = title;
    if (description) updates.description = description;

    await ideaRef.update(updates);

    res.status(200).send({ message: "Idea updated successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// DELETE an idea
export const deleteIdea = async (req, res) => {
  try {
    const userId = req.user.uid;
    const { ideaId } = req.params;
    await getIdeasCollection(userId).doc(ideaId).delete();

    res.status(200).send({ message: "Idea deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// ADMIN: Update any idea
export const updateIdeaByAdmin = async (req, res) => {
  try {
    const { userId, ideaId } = req.params;
    const { title, description } = req.body;

    const ideaRef = getIdeasCollection(userId).doc(ideaId);

    const updates = {};
    if (title) updates.title = title;
    if (description) updates.description = description;

    await ideaRef.update(updates);

    res.status(200).send({ message: "Idea updated successfully by admin" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// ADMIN: Delete any idea
export const deleteIdeaByAdmin = async (req, res) => {
  try {
    const { userId, ideaId } = req.params;
    await getIdeasCollection(userId).doc(ideaId).delete();

    res.status(200).send({ message: "Idea deleted successfully by admin" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
