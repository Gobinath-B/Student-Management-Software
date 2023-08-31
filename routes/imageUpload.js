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
app.use(cookieParser());

app.get('/', (req, res) => {
  res.render('upload');
});

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send('No image uploaded.');
    }

    const studentId = req.cookies.user;

    const bucket = admin.storage().bucket();
    const imageRef = bucket.file(file.originalname);
    const imageStream = imageRef.createWriteStream();
    imageStream.end(file.buffer);

    const imageUrl = await imageRef.getSignedUrl({ action: 'read', expires: '03-09-2099' });

    const studentDocRef = admin.firestore().collection('students').doc(studentId);
    await studentDocRef.update({
      imageUrl: imageUrl[0]
    });

    res.status(200).send('Image uploaded successfully.');
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
});

app.post('/certificate', async (req, res) => {
  try {
    const studentId = req.cookies.user;
    const { certificateType, eventName } = req.body;

    const studentDocRef = admin.firestore().collection('students').doc(studentId);

    // Update the student's certificate information based on the chosen type
    await studentDocRef.update({
      [`certificate.${certificateType}`]: {
        eventName: eventName
      }
    });

    res.status(200).send('Certificate information stored successfully.');
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
});



module.exports = Router