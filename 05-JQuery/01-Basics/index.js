$("h1").addClass("big-title margin-50");
const a=$("button"); // selects all buttons

// $("h1").removeClass("big-title margin-50");

// alert($("h1").hasClass("margin-50")) // check for class

$("h1").text("Sayonara.");
$("button").html("<em>Alo</em>");
$("a").attr("href","https://www.yahoo.com");

$("h1").click(function(){
    $("h1").css("color","purple")
})

// $("button").click(function(){
//     $("h1").css("color","green")
// })


// if you wantto use all site just delete input and replace with $(document)
$("input").keypress(function(event){
    console.log(event.key);
    $("h1").text(event.key)
})

$("h1").on("mouseover",function(){
    $("h1").css("color","red")

})

//animation
$("button").click(function(){
    // $("h1").toggle()
    // $("h1").fadeToggle()
    // $("h1").slideToggle()
    // $("h1").animate( { opacity:0.5} )
    $("h1").slideUp().slideDown().animate({opacity:0.5})

})