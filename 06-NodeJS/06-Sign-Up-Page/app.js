const bodyParser= require("body-parser")
const express=require("express")
const request= require("request")
const https = require("https")
const mailchimp = require("@mailchimp/mailchimp_marketing");

const app = express()

app.use(express.static("public"))

app.use(bodyParser.urlencoded({extended:true}))

mailchimp.setConfig({
//*****************************ENTER YOUR API KEY HERE******************************
    apiKey: "",
//*****************************ENTER YOUR API KEY PREFIX HERE i.e.THE SERVER******************************
    server: ""
});


app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html")
});

app.post("/",function(req,res){
            
    const firstName=req.body.fName
    const lastName=req.body.lName
    const email=req.body.email
    
    /*******************PUT YOUR LIST ID HERE**************************/
    const listId = ""

    const subscribingUser = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };


    async function run() {
        const response = await mailchimp.lists.addListMember(listId, {
            email_address: subscribingUser.email,
            status: "subscribed",
            merge_fields: {
            FNAME: subscribingUser.firstName,
            LNAME: subscribingUser.lastName
        }
        });
        //If all goes well logging the contact's id
            res.sendFile(__dirname + "/success.html")
            console.log(
        `Successfully added contact as an audience member. The contact's id is ${
            response.id
            }.`
        );
        }
    run().catch(e => res.sendFile(__dirname + "/failure.html"));


});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
})





/**
 * 
    const data= {
        members:[
            {
                email_address:email,
                status: "subscribed",
                merge_fields:{
                    FNAME:firstName,
                    LNAME:lastName
                }
            }
        ]
    };
    
    const jsonData= JSON.stringify(data);
    
 */