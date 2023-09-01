/** @format */

const express = require("express");
const db = require("../config/fb").firestore();
const router = express.Router();
router.get("/", (req, res) => {
     res.render("add-task");
});
router.post("/", async (req, res) => {
     const {
          task_name,
          due_from,
          due_to,
          pillar_type,
          task_code
     } = req.body

     console.log(req.body);

     const response =await db.collection('task').doc('Swq0AKtoqJTUpwmNPCnV').get()

     let task = response.data()
     task[task_code] = {
          task_name:task_name,
          startDate:due_from,
          endDate:due_to,
          pillar:pillar_type
     }
     console.log(task);
     db.collection('task').doc('Swq0AKtoqJTUpwmNPCnV').update(task);
     res.redirect('/add-task')
});
module.exports = router;
