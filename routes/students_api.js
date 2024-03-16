const express = require("express");
const router = express.Router();
const Student = require("../schema/Student");

router.get("/student", async (req, res) => {
  try {
    const student = await Student.find({});
    console.log(student);
    return res.status(200).json(student);
  } catch (err) {
    console.error("Error getting products:", err);
    return res.status(500).send("Error getting products");
  }
});

router.post("/student", async (req, res) => {
  try {
    const newStudent = new Student({
      name: req.body.name,
      age: req.body.age
    });
    console.log("🚀 ~ router.post ~ newStudent:", newStudent);

    await newStudent.save();

    return res.status(201).send("Your student saved");

  } catch (err) {
    console.error("Error getting students:", err);
    return res.status(401).send("Error getting students");
  }


});

module.exports = router;
