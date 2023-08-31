var admin = require("firebase-admin");

var serviceAccount = require("./fb.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "balaji-ffaad.appspot.com"
});

module.exports = admin;