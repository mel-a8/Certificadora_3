import admin from "firebase-admin";
import { createRequire } from "module";
import path from "path";
import { fileURLToPath } from "url";

// Helper to use require in ES Modules
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load service account key from .env path
const serviceAccountPath = path.resolve(
  __dirname,
  "..",
  "..",
  process.env.FIREBASE_SERVICE_ACCOUNT_PATH
);
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export { db };
