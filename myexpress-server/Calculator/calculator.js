const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");

});
app.post("/", (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("The result is : " + result);
    
});

app.get("/bmicalculator", (req, res) =>{
    res.sendFile(__dirname + "/bmiCalculator.html");

});

app.post("/bmicalculator", (req, res) => {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var BMI  = weight/(height * height);
    res.send("Your Bmi is " + BMI);
})



app.listen(3000, () => {
    console.log("app is listening at 3000");
})