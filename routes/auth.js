const express = require('express')
const admin = require("../config/fb")
const route = express.Router()

const app = express();

app.use(express.json());

app.set('view engine', 'ejs'); // Set EJS as the view engine



app.set('view engine', 'ejs'); // Set EJS as the view engine
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await admin.auth().getUserByEmail(email);
  
      if (user) {
       
        const userSnapshot = await admin.firestore().collection('students').doc(user.uid).get();
        const userData = userSnapshot.data();
  
        if (userData) {
          res.render('profile', { userData }); 
        } else {
          res.status(404).send('User not found');
        }
      } else {
        res.status(401).send('Invalid credentials');
      }
    } catch (error) {
      res.status(500).send('Error: ' + error.message);
    }
  });
  
modules.exports = route