// routes/courses.js
const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const User = require('../models/User');
const auth = require('../middleware/auth');

// Create a new course
router.post('/', auth, async (req, res) => {
  try {
    const newCourse = new Course({
      ...req.body,
      instructor: req.user.id
    });
    const course = await newCourse.save();
    res.json(course);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().populate('instructor', 'username');
    res.json(courses);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Enroll in a course
router.post('/enroll/:courseId', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const course = await Course.findById(req.params.courseId);

    if (!course) return res.status(404).json({ msg: 'Course not found' });

    if (user.enrolledCourses.includes(course._id)) {
      return res.status(400).json({ msg: 'Already enrolled in this course' });
    }

    user.enrolledCourses.push(course._id);
    await user.save();

    res.json({ msg: 'Enrolled successfully' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;