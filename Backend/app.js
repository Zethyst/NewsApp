const express = require("express");
const request = require("request");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    const options = {
        url: "https://newsapi.org/v2/top-headlines",
        qs: {
            country: "in",
            category: "technology",
        },
        headers: {
            'User-Agent': 'Newsapp', // Set your user agent
            'X-Api-Key': '183d2c5864504ce0bfa355cf205526bd' // Your API key
        }
    };

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    });
});

app.listen(port, () => {
    console.log(`Listening on port number: ${port}`);
});
