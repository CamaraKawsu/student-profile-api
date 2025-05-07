const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
// Route to create a new student
router.post("/", studentController.createStudent);
// Route to get all students
router.get("/", studentController.getAllStudents);
// Route to get a student by ID
router.get("/:id", studentController.getStudentById);
// Route to update a student
router.put("/:id", studentController.updateStudent);
// Route to delete a student
router.delete("/:id", studentController.deleteStudent);
module.exports = router;
