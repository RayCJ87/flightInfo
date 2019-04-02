const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

const fetch = require("node-fetch");

dotenv.config();

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let profile;


app.get("/", (req, res) =>{

})

app.get("/home", (req, res)=> {
    
    res.render("index.ejs");
})

app.get("/result", (req, res)=> {
    const airName = req.body.flightC;
    const flightNumber = req.body.flightNum;
    console.log(req.body);
    console.log(`the airline is: ${airName}`)
    console.log(`the flightnumber is: ${flightNumber}`)
    fetch(`http://aviation-edge.com/v2/public/timetable?key=${process.env.API_KEY2}&iataCode=YYZ&type=departure`)
    .then(res => res.json())
    .then(json => profile = json)

    res.render("result.ejs")

})

app.listen(PORT, () => {
    console.log(`The test app listening on port ${PORT}!`);
    console.log(`the api url here: ${process.env.API_URL}`);
    console.log(`The api key is : ${process.env.API_KEY2}`);
})
