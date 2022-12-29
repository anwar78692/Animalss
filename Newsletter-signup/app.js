const express = require("express");
const bodyParser = require("body-parser")
const request = require("request");


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    console.log(fname);
    console.log(lname);
    console.log(email);
})


app.listen(3000, ()=> {
    console.log("server is running at port 3000");
})

// api keys
//ed472811a0c2b3f5091a85602969e895-us9

// list id
// 