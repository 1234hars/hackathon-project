const apiUrl = "https://indeed12.p.rapidapi.com/jobs/search";
const queryParams = {
  query: "manager",
  location: "chicago",
  page_id: 1,
  locality: "us",
  fromage: 1,
  radius: 50,
  sort: "date",
};

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "YOUR_API_KEY_HERE", // Replace with a secure way to store your API key
    "x-rapidapi-host": "indeed12.p.rapidapi.com",
    "Access-Control-Allow-Origin": "https://your-website.com", // Replace with your website's origin
  },
};

try {
  const response = await fetch(`${apiUrl}?${new URLSearchParams(queryParams)}`, options);
  const result = await response.json();
  console.log(result);
  // Display the results to your users
  displayJobResults(result);
} catch (error) {
  console.error(error);
  // Display a user-friendly error message
  displayErrorMessage("Error fetching job results. Please try again later.");
}

// Example function to display job results
function displayJobResults(result) {
  const jobList = document.getElementById("job-list");
  result.forEach((job) => {
    const jobElement = document.createElement("div");
    jobElement.innerHTML = `
      <span>${job.title} - ${job.company} - ${job.location}</span>
      <button class="apply-button">Apply</button>
    `;
    jobList.appendChild(jobElement);
  });
}

// Example function to display an error message
function displayErrorMessage(message) {
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = message;
}