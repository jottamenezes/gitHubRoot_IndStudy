'use strict';


var windowW;
// GETTING CONTAINERS
var div1 = document.querySelector('#div1');
var div2 = document.querySelector('#div2');
var div3 = document.querySelector('#div3');
var div4 = document.querySelector('#div4');
var div5 = document.querySelector('#div5');
var div6 = document.querySelector('#div6');
var div7 = document.querySelector('#div7');
var div8 = document.querySelector('#div8');
var div9 = document.querySelector('#div9');
var div10 = document.querySelector('#div10');
var div11 = document.querySelector('#div11');
var div12 = document.querySelector('#div12');

// TARGETTING ANIMATIONS
var anim1 = document.querySelector('#principle-1');
var anim2 = document.querySelector('#principle-2');
var anim3 = document.querySelector('#principle-3');
var anim4 = document.querySelector('#principle-4');
var anim5 = document.querySelector('#principle-5');
var anim6 = document.querySelector('#principle-6');
var anim7 = document.querySelector('#principle-7');
var anim8 = document.querySelector('#principle-8');
var anim9 = document.querySelector('#principle-9');
var anim10 = document.querySelector('#principle-10');
var anim11 = document.querySelector('#principle-11');
var anim12 = document.querySelector('#principle-12');



// GETTING PRINCIPLE TITLES
// var animTitle = document.querySelector('.principleTitle');
var animTitle1 = document.getElementById("div1").getElementsByClassName("principleTitle")[0];
var animTitle2 = document.getElementById("div2").getElementsByClassName("principleTitle")[0];

// FADING TITLE IN AND OUT
function titleIn1() {
  animTitle1.style.opacity = "1";
  animTitle1.style.transform = "translateY(0%)";
}

function titleOut1() {
  animTitle1.style.opacity = "0";
  animTitle1.style.transform = " translateY(200%)";
}


// ANIMATING DIV 1 ON HOVER
div1.addEventListener('mouseover', overDiv1);

function overDiv1() {
  console.log('over Div1');
  div1.style. backgroundColor = 'hsl(194, 36%, 5%)';
  anim1.style.animationPlayState = 'paused';
  anim1.style.opacity = "0.3";

  // ANIMATING TITLE
  animTitle1.style.opacity = "1";
  animTitle1.style.transform = "translateY(0%)";
}

// ANIMATING DIV 1 ON MOUSEOUT
div1.addEventListener('mouseout', leaveDiv1);
function leaveDiv1() {
  console.log('leave Div1');
  div1.style. backgroundColor = 'hsl(194, 36%, 10%)';

  anim1.style.animationPlayState = "running";
  anim1.style.opacity = "1";

  // ANIMATING TITLE
  animTitle1.style.opacity = "0";
  animTitle1.style.transform = " translateY(200%)";
}


// ANIMATING DIV 2 ON HOVER
div2.addEventListener('mouseover', overDiv2);

function overDiv2() {
  console.log('over Div2');
  div2.style. backgroundColor = 'hsl(194, 36%, 5%)';
  anim2.style.animationPlayState = 'paused';
  anim2.style.opacity = "0.3";

    // ANIMATING TITLE
  animTitle2.style.opacity = "1";
  animTitle2.style.transform = "translateY(0%)";


}

// ANIMATING DIV 2 ON MOUSEOUT
div2.addEventListener('mouseout', leaveDiv2);
function leaveDiv2() {
  console.log('leave Div2');
  div2.style. backgroundColor = 'hsl(194, 36%, 10%)';



  // TITLEOUT
  animTitle2.style.opacity = "0";
  animTitle2.style.transform = " translateY(200%)";



}











window.addEventListener('resize', getWindowWidth);

function getWindowWidth() {
  windowW = window.innerWidth;
  console.log('The Viewport is : ' + windowW);

}
