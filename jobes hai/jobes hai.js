// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Fetch and display job listings
  fetchAndDisplayJobs();

  // Fetch and display courses
  fetchAndDisplayCourses();

  // Initialize learning portal
  initLearningPortal();
});

// Fetch and display jobs
async function fetchAndDisplayJobs() {
  try {
    const jobs = await fetchJobsData();
    renderJobList(jobs);
  } catch (error) {
    handleError(error);
  }
}

// Fetch jobs data
async function fetchJobsData() {
  // In a real application, you would fetch this data from an API
  return [
    { title: "Software Engineer", company: "Tech Co", location: "Remote" },
    { title: "Data Analyst", company: "Data Corp", location: "New York" },
    {
      title: "UX Designer",
      company: "Design Inc",
      location: "San Francisco",
    },
    { title: "Software Engineer", company: "Tech Co", location: "Remote" },
    { title: "Data Analyst", company: "Data Corp", location: "New York" },
    {
      title: "UX Designer",
      company: "Design Inc",
      location: "San Francisco",
    },
    { title: "Software Engineer", company: "Tech Co", location: "Remote" },
    { title: "Data Analyst", company: "Data Corp", location: "New York" },
    {
      title: "UX Designer",
      company: "Design Inc",
      location: "San Francisco",
    },
    { title: "Software Engineer", company: "Tech Co", location: "Remote" },
    { title: "Data Analyst", company: "Data Corp", location: "New York" },
    {
      title: "UX Designer",
      company: "Design Inc",
      location: "San Francisco",
    },
  ];
}

// Render job list
function renderJobList(jobs) {
  const jobList = document.getElementById("job-list");
  jobs.forEach((job) => {
    const jobElement = document.createElement("div");
    jobElement.innerHTML = `
      <span>${job.title} - ${job.company} - ${job.location}</span>
      <button class="apply-button">Apply</button>
    `;
    jobList.appendChild(jobElement);
  });
}

// Fetch and display courses
async function fetchAndDisplayCourses() {
  try {
    const courses = await fetchCoursesData();
    renderCourseList(courses);
  } catch (error) {
    handleError(error);
  }
}

// Fetch courses data
async function fetchCoursesData() {
  // In a real application, you would fetch this data from an API
  return [
    { title: "Introduction to Web Development", duration: "8 weeks" },
    { title: "Data Science Fundamentals", duration: "12 weeks" },
    { title: "UX/UI Design Principles", duration: "6 weeks" },
  ];
}

// Render course list
function renderCourseList(courses) {
  const courseList = document.getElementById("course-list");
  courses.forEach((course) => {
    const courseElement = document.createElement("div");
    courseElement.textContent = `${course.title} - Duration: ${course.duration}`;
    courseList.appendChild(courseElement);
  });
}

// Handle errors
function handleError(error) {
  console.error("Error:", error);
}

// Initialize learning portal
function initLearningPortal() {
  const learningContent = document.getElementById("learning-content");
  learningContent.innerHTML = `
        <h3>Welcome to the Learning Portal</h3>
        <p>Access your enrolled courses and track your progress here.</p>
        <button id="start-learning">Start Learning</button>
    `;

  document.getElementById("start-learning").addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/l.html";
  });
}
