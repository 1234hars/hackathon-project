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

    // Add event listener to the "Apply" button
    const applyButton = jobElement.querySelector(".apply-button");
    applyButton.addEventListener("click", () => {
      // Redirect to the application page
      window.location.href = "application.html";
    });
  });
}
