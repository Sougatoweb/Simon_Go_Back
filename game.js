
var gamePattern = [];
var userClickedPattern=[];
var level=1;
var buttonColors = ["red", "blue", "green", "yellow"];
var started=false;

$(document).keydown(function(){
  if(!(started)){
   nextSequence();
   started=true;
}
});


$(".btn").click(function (){

var userChosenColor = $(this).attr("id");

userClickedPattern.push(userChosenColor);
playSound(userChosenColor);
animatePress(userChosenColor);
checkAnswer(userClickedPattern.length-1);
});
function playSound(name)
{
  var x= new Audio("sounds/"+name+".mp3")
  x.play();

}

function animatePress(currentColor)
{
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){$("#"+currentColor).removeClass("pressed");},100);
}

function checkAnswer(currentLevel){

   if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
   {
     console.log("success");

if(userClickedPattern.length===gamePattern.length){
       setTimeout(function(){nextSequence();},1000);
}

 }

 else
 {
   console.log("wrong");

   playSound("wrong");
   $("body").addClass("game-over");
   setTimeout(function (){$("body").removeClass("game-over");},200);

   $("h1").text("Game Over, Press any Key to Restart");

   startOver();
 }


}

function nextSequence()
{  $("h1").text("Level "+ level);
 userClickedPattern=[];

  level++;
  var randomNumber = Math.floor(Math.random() * 4);


  var randomColorChosen = buttonColors[randomNumber];

  gamePattern.push(randomColorChosen);


  $("#" + randomColorChosen).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomColorChosen);




}

function startOver(){
  level=1;
  gamePattern=[];
started=false;

}
