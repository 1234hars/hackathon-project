const API_URL = "https://api.indeed.com/ads/apisearch";
const PUBLISHER_ID = "YOUR_INDEED_PUBLISHER_ID";

const searchInput = document.getElementById("job-search");
const searchBtn = document.getElementById("search-btn");
const jobList = document.getElementById("job-list");

if (searchBtn) {
  searchBtn.addEventListener("click", searchJobs);
}

function searchJobs() {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    const apiUrl = `${API_URL}?publisher=${PUBLISHER_ID}&q=${searchTerm}&l=&sort=&radius=&st=&jt=&start=&limit=10&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const jobResults = data.results;
        jobList.innerHTML = "";
        jobResults.forEach((job) => {
          const jobHTML = `
            <div>
              <h3>${job.jobtitle}</h3>
              <p>${job.company}</p>
              <p>${job.location}</p>
              <p>${job.snippet}</p>
            </div>
          `;
          jobList.insertAdjacentHTML("beforeend", jobHTML);
        });
      })
      .catch((error) => console.error(error));
  }
}
