const express = require('express');
const multer = require('multer');
const admin = require('../config/fb');
const Router = express.Router
const cookieParser = require('cookie-parser');

const app = express();



const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser()); // Use cookie-parser middleware

app.get('/', (req, res) => {
  res.render('upload');
});

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send('No image uploaded.');
    }

    const studentId = req.cookies.user; // Retrieve student ID from the cookie

    // Upload the image to Firebase Storage
    const bucket = admin.storage().bucket();
    const imageRef = bucket.file(file.originalname);
    const imageStream = imageRef.createWriteStream();
    imageStream.end(file.buffer);

    // Save the image URL and student ID in Firestore
    const imageUrl = await imageRef.getSignedUrl({ action: 'read', expires: '03-09-2099' });
    await admin.firestore().collection('students').doc(studentId).set({
      imageUrl: imageUrl[0],
      studentId: studentId
    });

    res.status(200).send('Image uploaded and student data stored successfully.');
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
});


module.exports = Router