// routes/lms.js
const express = require("express");
const router = express.Router();
const Course = require("../models/Course");
const User = require("../models/User");
const auth = require("../middleware/auth");

// Get user's enrolled courses
router.get("/my-courses", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("enrolledCourses");
    res.json(user.enrolledCourses);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Get course content
router.get("/course/:courseId", auth, async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return res.status(404).json({ msg: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Update course progress
router.post("/progress/:courseId", auth, async (req, res) => {
  try {
    const { lessonId, completed } = req.body;
    const user = await User.findById(req.user.id);
    // Update progress logic here
    res.json({ msg: "Progress updated" });
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
