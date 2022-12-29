const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");

});

app.post("/", (req, res) => {
    const query = req.body.cityName;
    const apiKey = "dbd3b02d8958d62185d02e944cd5f522";
    const unit = "metric";

    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +  "&APPID=" + apiKey + "&units=" + unit;
    https.get(url, function(response){
        console.log(response.statusCode);


        response.on("data", function(data){
            const whetherData = JSON.parse(data);
            console.log(whetherData);
            const temp = whetherData.main.temp;
            const weatherdescription = whetherData.weather[0].description;
           // const locationName = whetherData.main.name;
            // console.log(temp);
            // console.log(weatherdescription);
            //console.log(locationName);
            const icon = whetherData.weather[0].icon;
            const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<p>The weather description is : " + weatherdescription + "</p>");
            res.write("<h1>The Temp in " + query + " is  " + temp + " degree celcius.</h1>");
            res.write("<img src =" + imageUrl + ">");
            res.send();
            // console.log(whetherData);
        })
    })

})
app.listen(3000, () => {
    console.log("App is listening at 3000");
})