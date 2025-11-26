import admin from "firebase-admin";
import { db } from "../config/firebaseConfig.js";

// This middleware verifies the user's token (Authentication)
export const isAuthenticated = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res
      .status(401)
      .send({ message: "Unauthorized. No token provided." });
  }

  const idToken = authorization.split("Bearer ")[1];

  try {
    // 1. Verify the token using Firebase Admin
    // checkRevoked: true ensures that if the user logged out (revoked tokens), this fails.
    const decodedToken = await admin.auth().verifyIdToken(idToken, true);

    // 2. Get the user's role from your Firestore 'users' collection
    const userDoc = await db.collection("users").doc(decodedToken.uid).get();
    if (!userDoc.exists) {
      return res.status(404).send({ message: "User not found in database." });
    }

    // 3. Attach user info (including role) to the request object
    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email,
      role: userDoc.data().role,
    };

    next(); // All good, proceed to the controller
  } catch (error) {
    return res
      .status(401)
      .send({ message: `Unauthorized. Invalid token, with error ${error}` });
  }
};

// checks if the authenticated user has admin role
export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).send({ message: "Forbidden. Requires admin role." });
  }
  next(); // User is an admin, proceed
};


