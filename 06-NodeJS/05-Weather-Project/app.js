const express=require("express")
const https=require("https")
const app=express()

const apiKey="---------YOUR API KEY------"
const query= "Istanbul"
const unit = "metric"

const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+unit+"&appid="+apiKey;

app.get("/",function(req,res){
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            res.setHeader("Content-Type", "text/html");

            const weatherData=JSON.parse(data);
            const temp=weatherData.main.temp
            const description=weatherData.weather[0].description;
            const icon=weatherData.weather[0].icon
            const imgUrl="http://openweathermap.org/img/wn/"+icon +"@2x.png"
            res.write("The weather is currently " + description +" \n");  
            res.write("<h1>The temperature in Istanbul is " + temp + " degree Celcius. </h1>")
            res.write("<img src=" + imgUrl + ">");
            
            res.send()

        })
    });
});




app.listen(3000,function(){
    console.log("Server is running at port 3000...");
});
