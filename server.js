const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();
const pg = require("pg");
const PORT = 3000;

const connectionString = process.env.DB_URL;
const fetch = require("node-fetch");
const client = new pg.Client(connectionString);


dotenv.config();

app.set("view engine", "ejs")
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let profile;
let timeInfo;
let currentAirline;

app.get("/", (req, res) =>{

})

app.get("/home", (req, res)=> {
    
    res.render("index.ejs");
})

app.post("/airline/:arrName", (req, res)=> {
    const airName = req.body.flightN
    console.log(airName)
    fetch(`http://aviation-edge.com/v2/public/flights?key=${process.env.API_KEY3}&airlineIata=${airName}`)
    .then(res => res.json())
    .then(json => profile = json)
    .then(profile=>{
        currentAirline = profile;
        res.render('airline.ejs', { flightData: profile });
        // console.log(profile);
    })
})

app.post("/result", (req, res)=> {
    const flightName = req.body.flightNum;
    const flightLatitude = req.body.flightLat;
    console.log(flightName)
    console.log(flightLatitude);
    profile = [flightName, flightLatitude];

})

app.listen(PORT, () => {
    console.log(`The test app listening on port ${PORT}!`);
    console.log(`the api url here: ${process.env.API_URL}`);
    console.log(`The api key is : ${process.env.API_KEY2}`);
})
