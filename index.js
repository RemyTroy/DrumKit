

function buttonAnimation(currentKey){

var activeButton = document.queryselector("." + currentKey)

  activeButton.classList.add("pressed");

setTimeout(function() {

  activeButton.classlist.remove("pressed");
}, 100);

}







var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//detecting Button Press
//start of loop
for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.textContent;
    // this variable holds "this" is the identity that triggered the event of the adventlistener/loop so you use this to ID what triggered the event first


    makeSound(buttonInnerHTML);
    changeStyle(buttonInnerHTML); //animation

  });
}
  // underneath this section is Keyboard Press
  document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    changeStyle(event.key); // animation
  });


// remember for loop it runs i until 7 because of 7 numberOfDrumButtons total it will keep running the loop - this allows you to increment by one
// good explanation for eventlistener on lesson 132
// lesson 164 Higher Order Function Challenge Solution


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();



function makeSound(key) {
  switch (key) {
    case "w": // colon would be the start of this case within the switch similar to the first curly braces in a function
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break; // semi colon is the end where this case would end at similar to second curly brace in a function everything that happens between this and the colon above is what runs for this case

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(buttonInnerHTML);
      // default is kind of like the else statement in if else - always good practice to include it

  }
}
//animation
function changeStyle(keyvalue)
{
   var pressedEle = document.querySelector("."+keyvalue);
   pressedEle.classList.add("pressed");
   setTimeout(removeClass,100,pressedEle);//100 milli seconds = 0.1 sec
   // and pressedEle in settimeout is like sending argument to removeClass
}

function removeClass(pressedEle){
    pressedEle.classList.remove("pressed");
}
