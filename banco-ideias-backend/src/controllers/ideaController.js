import { db } from "../config/firebaseConfig.js";
import { Timestamp } from "firebase-admin/firestore";

// Helper function to get the 'ideias' subcollection for a specific user
const getIdeasCollection = (userId) => {
  return db.collection("users").doc(userId).collection("ideias");
};

// CREATE a new idea for a user
export const createIdea = async (req, res) => {
  try {
    const { userId } = req.params;
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

    const ideasCollection = getIdeasCollection(userId);
    const docRef = await ideasCollection.add(newIdea);

    res.status(201).send({ id: docRef.id, ...newIdea });
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

// READ a single idea
export const getIdea = async (req, res) => {
  try {
    const { userId, ideaId } = req.params;
    const ideaDoc = await getIdeasCollection(userId).doc(ideaId).get();

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
    const { userId, ideaId } = req.params;
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
    const { userId, ideaId } = req.params;
    await getIdeasCollection(userId).doc(ideaId).delete();

    res.status(200).send({ message: "Idea deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
