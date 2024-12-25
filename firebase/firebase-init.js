const FirebaseAdmin = require("firebase-admin");
const firebaseConfig = require('../config/firebase.json');

module.exports = FirebaseAdmin.initializeApp({
    credential: FirebaseAdmin.credential.cert({
      projectId: firebaseConfig.project_id,
      clientEmail: firebaseConfig.client_email,
      privateKey: firebaseConfig.private_key
    }),
    projectId: firebaseConfig.project_id
  });
  