const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

const fetch = require("node-fetch");

dotenv.config();

app.set("view engine", "ejs")


let profile;


app.get("/", (req, res) =>{
    fetch(`http://aviation-edge.com/v2/public/timetable?key=${process.env.API_KEY2}&iataCode=YYZ&type=departure`)
    .then(res => res.json())
    .then(json => profile = json)
    res.send(profile);

})

app.get("/home", (req, res)=> {
    res.render("index.ejs");
})

app.listen(PORT, () => {
    console.log(`The test app listening on port ${PORT}!`);
    console.log(`the api url here: ${process.env.API_URL}`);
    console.log(`The api key is : ${process.env.API_KEY2}`);
})
