const express=require("express");

const app = express();

app.get("/",function(req, res)
{
    res.send("<h1>Hello HTML!</h1>");
});

app.get("/contact", function(req,res){
    res.send("Contact me at: kaa....");
});

app.get("/about", function(req,res){
    res.send("<h2>My name is Kaan Akgundogdu.</h2>");
});

app.listen(3000, function()
{
    console.log("server started on port 3000");
});
