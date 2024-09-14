// Simulated job data
const simulatedJobs = [
  {
    jobtitle: "Software Engineer",
    company: "TechCorp",
    location: "San Francisco, CA",
    snippet: "Exciting opportunity for a skilled software engineer...",
  },
  {
    jobtitle: "Data Analyst",
    company: "DataInsights",
    location: "New York, NY",
    snippet: "Looking for a data analyst to join our growing team...",
  },
  {
    jobtitle: "UX Designer",
    company: "DesignStudio",
    location: "Seattle, WA",
    snippet: "Creative UX designer needed for innovative projects...",
  },
  // Add more simulated job listings as needed
];

// Simulated API function
function simulateJobSearch(options, callback) {
  setTimeout(() => {
    const filteredJobs = simulatedJobs
      .filter(
        (job) =>
          (!options.q ||
            job.jobtitle.toLowerCase().includes(options.q.toLowerCase())) &&
          (!options.l ||
            job.location.toLowerCase().includes(options.l.toLowerCase()))
      )
      .slice(0, options.limit || 10);

    callback({ results: filteredJobs });
  }, 500); // Simulate API delay
}

// Usage
const jobSearchOptions = {
  q: "software", // search query
  l: "San Francisco", // location
  limit: 5, // number of results
};

simulateJobSearch(jobSearchOptions, function (data) {
  const jobs = data.results;
  let html = "";

  jobs.forEach(function (job) {
    html += '<div class="job-listing">';
    html += `<h2>${job.jobtitle}</h2>`;
    html += `<p><strong>Company:</strong> ${job.company}</p>`;
    html += `<p><strong>Location:</strong> ${job.location}</p>`;
    html += `<p>${job.snippet}</p>`;
    html += "</div>";
  });

  document.getElementById("job-listings").innerHTML = html;
});
