const express = require("express");
const axios = require("axios");
var cors = require("cors");
require("dotenv").config();

const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

const GITHUB_URL = "https://github.com/login/oauth/access_token";

const app = express();

app.use(cors({ credentials: true, origin: true }));

app.get("/oauth/redirect", (req, res) => {
  axios({
    method: "POST",
    url: `${GITHUB_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}`,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      const token = response.data.access_token;
      res.redirect(
        `http://localhost:3000?access_token=${response.data.access_token}`
      );
    })
    .catch((err) => {
      console.log("********************ERROR********************");
      console.log(`Error occured ${err}`);
    });
});

app.get("/user/data", (req, res) => {
  const token = req.headers["authorization"];
  axios({
    method: "GET",
    url: ` https://api.github.com/user`,
    headers: {
      Authorization: token,
    },
  })
    .then((resp) => {
      console.log("Received a resp after getting git");
      res.statusCode = 200;
      res.send(resp.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
