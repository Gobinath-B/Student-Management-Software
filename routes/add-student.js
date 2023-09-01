/** @format */

const express = require("express");
const router = express.Router();
const db = require("../config/fb");
router.get("/", async (req, res) => {
     // const response = await db.collection('students')
     res.render("add-student");
});
router.post("/", async (req, res) => {
     const body = req.body;
     const response = await db.firestore().collection("students").add(body);
     console.log("RESPONSE", response);
     res.render("add-student", {
          message: "Student added successfully",
     });
});
module.exports = router;
