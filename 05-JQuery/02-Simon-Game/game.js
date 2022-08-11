let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

function buttonhandler() {
    let buttons = $(".btn");
    buttons.on("click", function (e) {
        let userChosenColour = this.id;
        userClickedPattern.push(userChosenColour);
        animatePress(userChosenColour);
    })

}

function nextSquence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    console.log(gamePattern);

    let chosenButton = $("#" + randomChosenColour);
    chosenButton.fadeOut(100).fadeIn(100);
    console.log(chosenButton);
    chosenButton.on("click", ()=>{
        setAudio(randomChosenColour)
    } );
}


function animatePress(currentColour){
    let chosenButton = $("#" + currentColour);
    chosenButton.addClass('pressed')
    setTimeout(function() {
        chosenButton.removeClass('pressed');
    }, 100);

}


function setAudio(randomChosenColour){
    switch (randomChosenColour) {
        case "red":
            playAudio("sounds/blue.mp3")
            break;
        case "blue":
            playAudio("sounds/blue.mp3")
            break;
        case "green":
            playAudio("sounds/green.mp3")
            break;
        case "yellow":
            playAudio("sounds/yellow.mp3")
            break;
        default:
            break;
    }
}

function playAudio(path) {
    var audio = new Audio(path);
    audio.play();
}
nextSquence()
buttonhandler()

