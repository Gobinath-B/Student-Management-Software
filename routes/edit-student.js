/** @format */

const express = require("express");
const router = express.Router();
const fb = require("../config/fb");
const db = fb.firestore();
router.get("/:id", async (req, res) => {
     const id = req.params.id;
     const depart_id = req.query.id;
     const response_data = await db.collection("students").doc(id).get();
     const actual_data = response_data.data();
     console.log("ACTUAL JOB", actual_data);
     //  res.render("edit-student", {
     //       data: actual_data.department[depart_id],
     //  });
});
router.post("/:id", async (req, res) => {
     const id = req.params.id;
     const depart_id = req.query.id;
     console.log(depart_id);
     const update_department_value = req.body.department;
     const response_data = await db.collection("college_info").doc(id).get();
     const result_data = response_data.data().department;
     result_data[`${depart_id}`] = update_department_value;
     console.log(result_data);
     await db.collection("college_info").doc(id).update({ department: result_data });
     res.redirect("/all-departments");
});
router.get("/delete/:id", async (req, res) => {
     const id = req.params.id;
     const depart_id = req.query.id;
     console.log(depart_id);
     const response_data = await db.collection("college_info").doc(id).get();
     var result_data = response_data.data().department;
     delete result_data[`${depart_id}`];
     console.log(result_data);
     await db.collection("college_info").doc(id).update({ department: result_data });
     res.redirect("/all-departments");
});
module.exports = router;
