import { db } from "../config/firebaseConfig.js";

const usersCollection = db.collection("users");

// CREATE a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;
    if (!name || !email || !role) {
      return res.status(400).send({ message: "Missing required fields" });
    }

    const newUser = { name, email, role };
    const docRef = await usersCollection.add(newUser);

    res.status(201).send({ id: docRef.id, ...newUser });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// READ a single user by ID
export const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const userDoc = await usersCollection.doc(userId).get();

    if (!userDoc.exists) {
      return res.status(404).send({ message: "User not found" });
    }

    res.status(200).send({ id: userDoc.id, ...userDoc.data() });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// UPDATE a user
export const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, email, role } = req.body;

    // Use update for partial updates, set with merge:true for a similar effect
    await usersCollection.doc(userId).update({ name, email, role });

    res.status(200).send({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// DELETE a user
export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Note: This does NOT delete subcollections.
    // For a real app, you'd need a Cloud Function to delete all 'ideias' subcollections.
    await usersCollection.doc(userId).delete();

    res.status(200).send({ message: "User (document) deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
