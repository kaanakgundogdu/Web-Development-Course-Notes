const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req,res){
    let n1=Number(req.body.num1);
    let n2=Number(req.body.num2);
    let answer= n1+n2;

    res.send(`${n1} + ${n2} = ${answer}`);
});

app.listen(3000,function(){
    console.log("Server started in port 3000.")
});


