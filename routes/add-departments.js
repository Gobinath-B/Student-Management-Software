/** @format */

const express = require("express");
const router = express.Router();
const fb = require("../config/fb");
const db = fb.firestore();
router.get("/", (req, res) => {
     res.render("add-departments");
});
router.post("/", async (req, res) => {
     const depart_id = req.body.id;
     const department_value = req.body.department;
     const response_data = await db.collection("college_info").doc("cIajardAYY7ySgxH3nY1").get();
     const id = response_data.id;
     const result_data = response_data.data().department;
     result_data[`${depart_id}`] = department_value;
     console.log(result_data);
     await db.collection("college_info").doc("cIajardAYY7ySgxH3nY1").update({ department: result_data });

     res.redirect("/all-departments");
});
module.exports = router;
