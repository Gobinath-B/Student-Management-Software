/** @format */

const express = require("express");
const db = require("../config/fb");
const router = express.Router();
router.get("/", (req, res) => {
     res.render("add-task");
});
router.post("/", async (req, res) => {
     const task = await db.firestore().collection("task").get();
     //  console.log(
     //       "ALL",
     //       task.docs.map((doc) => doc.data()),
     //  );
});
module.exports = router;
