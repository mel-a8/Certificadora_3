import { db, admin } from "../config/firebaseConfig.js";

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

// REGISTER a new user (Signup flow)
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res
        .status(400)
        .send({ message: "Missing required fields: name, email, password, role" });
    }

    // 1. Create user in Firebase Auth
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: name,
    });

    const uid = userRecord.uid;

    // 2. Create user document in Firestore
    const newUser = {
      name,
      email,
      role, // 'admin' or 'user'
    };

    await usersCollection.doc(uid).set(newUser);

    res.status(201).send({ id: uid, ...newUser });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// LOGOUT user (Revoke refresh tokens)
export const logoutUser = async (req, res) => {
  try {
    const uid = req.user.uid;
    await admin.auth().revokeRefreshTokens(uid);
    res.status(200).send({ message: "User logged out successfully." });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// LOGIN user (Exchange email/password for ID Token)
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ message: "Email and password are required" });
    }

    const apiKey = process.env.FIREBASE_WEB_API_KEY;
    if (!apiKey) {
      return res.status(500).send({ message: "Server configuration error: Missing API Key" });
    }

    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, returnSecureToken: true }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(401).send({ message: data.error.message || "Login failed" });
    }

    // Return the ID Token and Refresh Token
    res.status(200).send({
      idToken: data.idToken,
      refreshToken: data.refreshToken,
      expiresIn: data.expiresIn,
      localId: data.localId,
      email: data.email
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// GET MY PROFILE
export const getMyProfile = async (req, res) => {
  try {
    const userId = req.user.uid;
    const userDoc = await usersCollection.doc(userId).get();

    if (!userDoc.exists) {
      return res.status(404).send({ message: "User profile not found" });
    }

    res.status(200).send({ id: userDoc.id, ...userDoc.data() });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// GET ALL USERS (Admin only)
export const getAllUsers = async (req, res) => {
  try {
    const snapshot = await usersCollection.get();
    const users = [];
    snapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
