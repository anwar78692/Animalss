const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send(
        "<h1>Hello world</h1><h2>Bye</h2>"
    );
});
app.get("/contact", (req, res) => {
    res.send(
        "contact me at: anwar15298@gmail.com"
    );
})
app.get("/about", (req, res) => {
    res.send(
        "my name is anwar ahmad and fathers name is imtyaz ahmad<br> and i love teaching, reading"
    );
})
app.get("/hobbies", (req, res) => {
    res.send("<ul><li>Playing cricket</li><li>Reading Books</li>")
})

app.listen(3000, function(){
    console.log("app is listening at port 3000");
})