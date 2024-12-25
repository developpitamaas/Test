const FirebaseAdmin = require("firebase-admin");

module.exports = FirebaseAdmin.initializeApp({
    credential: FirebaseAdmin.credential.cert({
      projectId: process.env.project_id,
      clientEmail: process.env.client_email,
      privateKey: process.env.private_key
    }),
    projectId: process.env.project_id
  });
  