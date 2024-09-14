const searchBtn = document.getElementById("search-btn");
const searchBar = document.getElementById("searchbar");
const jobList = document.getElementById("job-list");

searchBtn.addEventListener("click", async () => {
  const searchQuery = searchBar.value.trim();
  const jobLocation = "USA"; // Replace with user's selected job location
  const publisherId = "YOUR_PUBLISHER_ID_HERE"; // Replace with your Indeed publisher ID
  const apiUrl = `https://www.indeed.com/developer/job-search/v2/json?q=${searchQuery}&l=${jobLocation}&publisher=${publisherId}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const jobs = data.results;

    jobList.innerHTML = "";

    jobs.forEach((job) => {
      const jobItem = document.createElement("li");
      jobItem.className = "job-item";
      jobItem.innerHTML = `
                <h2>${job.jobtitle}</h2>
                <p>${job.company}</p>
                <p>${job.location}</p>
            `;
      jobList.appendChild(jobItem);
    });
  } catch (error) {
    console.error(error);
  }
});
