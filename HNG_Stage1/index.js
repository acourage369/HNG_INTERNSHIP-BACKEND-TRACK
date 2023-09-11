import express from "express";
import moment from 'moment-timezone';
const app = express();
const port = 5000;

app.get('/slack_info', (req, res) => {
    // getting querry parameters
    const slackName = "Courage Adzewoda";
    const track = "Back-end";
    // Getting the current time and day
    const currentUTCTime = moment().tz('UTC');
    const currentDay = new Date().toLocaleDateString('en-US', {weekday: 'long'});
    // Getting github url
    const github_file_url = 'https://github.com/acourage369/HNG_INTERNSHIP-BACKEND-TRACK/blob/main/HNG_Stage1/index.js';
    const github_repo_url = 'https://github.com/acourage369/HNG_INTERNSHIP-BACKEND-TRACK.git';

    const dataResponse = {
        "slack_name": slackName,
        "current_day": currentDay,
        "utc_time": currentUTCTime.format(),
        "track": track,
        "github_file_url": github_file_url,
        "github_repo_url": github_repo_url,
        "status_code": 200,
    };

    res.status(200).json(dataResponse);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})
