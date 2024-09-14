async function searchJobs(query) {
  const indeedUrl = `https://www.indeed.com/ads/apiresults.js?publisher=YOUR_PUBLISHER_ID&q=${query}&l=&sort=&radius=&st=&jt=&start=`;
  const response = await fetch(indeedUrl);
  const data = await response.json();
  const jobResults = data.results;
  // Process the job results and display them in the #job-list section
  const jobListHtml = "";
  jobResults.forEach((job) => {
    jobListHtml += `
      <div>
        <h3>${job.jobtitle}</h3>
        <p>${job.company}</p>
        <p>${job.location}</p>
        <p>${job.snippet}</p>
      </div>
    `;
  });
  document.getElementById("job-list").innerHTML = jobListHtml;
}
document.getElementById("search-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const query = document.getElementById("job-search").value.trim();
  searchJobs(query);
});