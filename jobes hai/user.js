// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: {
    name: String,
    bio: String,
    skills: [String],
  },
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

module.exports = mongoose.model("User", userSchema);

// models/Job.js
const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: String,
  description: String,
  requirements: [String],
  postedDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Job", jobSchema);

// models/Course.js
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  duration: String,
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  lessons: [{ title: String, content: String }],
});

module.exports = mongoose.model("Course", courseSchema);
