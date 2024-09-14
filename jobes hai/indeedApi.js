// services/indeedApi.js
const axios = require('axios');

const INDEED_API_KEY = 'your_indeed_api_key';
const INDEED_API_URL = 'https://api.indeed.com/ads/apisearch';

async function searchJobs(query, location) {
  try {
    const response = await axios.get(INDEED_API_URL, {
      params: {
        publisher: INDEED_API_KEY,
        q: query,
        l: location,
        format: 'json',
        v: '2'
      }
    });

    return response.data.results;
  } catch (error) {
    console.error('Error fetching jobs from Indeed:', error);
    throw error;
  }
}

module.exports = { searchJobs };

// routes/jobs.js
const express = require('express');
const router = express.Router();
const { searchJobs } = require('../services/indeedApi');
const auth = require('../middleware/auth');

router.get('/search', auth, async (req, res) => {
  const { query, location } = req.query;
  try {
    const jobs = await searchJobs(query, location);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs' });
  }
});

module.exports = router;