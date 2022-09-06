const express=require("express")
const bodyParser= require("body-parser")
const app=express()

app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/",function(req,res){
    let w=parseFloat(req.body.weight);
    let h=parseFloat(req.body.height);
    let bmi = w/(h*h)
    bmi*=10000
    switch (true) {
        case bmi<18.5:
            res.send(`You're Underweight ${bmi}`);
            break;
        case bmi> 25 && bmi<30:
            res.send(`You're Overweight ${bmi}`);
            break;
        case bmi > 30:
            res.send(`You're Obese  ${bmi}`);
            break;
        default:
            res.send(`You're Normal ${bmi}`);
            break;
    }
});


app.listen(3000,function(){
    console.log("server live on port 3000");
});