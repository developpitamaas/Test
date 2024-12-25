const FirebaseAdmin = require("firebase-admin");

module.exports = FirebaseAdmin.initializeApp({
    credential: FirebaseAdmin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY
    }),
    projectId: process.env.FIREBASE_PROJECT_ID
  });
  