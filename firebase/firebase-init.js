const FirebaseAdmin = require("firebase-admin");

module.exports = FirebaseAdmin.initializeApp({
    credential: FirebaseAdmin.credential.cert({
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
        projectId: process.env.FIREBASE_PROJECT_ID,
    }),
    projectId: process.env.FIREBASE_PROJECT_ID
});