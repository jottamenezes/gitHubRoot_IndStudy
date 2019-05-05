'use strict';

var img1 = document.querySelector('#img1');
var arrowLeft = document.querySelector('#arrowLeft');
var closeButton = document.querySelector('#closeButton');
var windowW;

window.addEventListener('resize', getWindowWidth);

function getWindowWidth() {
  windowW = window.innerWidth;
  console.log('The Viewport is : ' + windowW);

}



arrowLeft.addEventListener('mouseover', function() {
  // console.log('mousedown on button');
  img1.style.opacity = "0.2";
  img1.style.transform = "rotate(-5deg)", "scale(0.5)";



});

arrowLeft.addEventListener('mouseout', function() {
  // console.log('mousedown on button');
  img1.style.opacity = "1";
  img1.style.transform = "rotate(0deg)";





});
