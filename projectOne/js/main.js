'use strict';

var img1 = document.querySelector('#img1');
var arrowLeft = document.querySelector('#arrowLeft');
var closeButton = document.querySelector('#closeButton');

arrowLeft.addEventListener('hover', function() {
  // console.log('mousedown on button');
  img1.style.opacity = "0.2";
  img1.style.transform = "rotate(5deg)";


});

arrowLeft.addEventListener('click', function() {
  // console.log('mousedown on button');
  img1.style.opacity = "0.5";

  img1.style.transform = "rotate(-5deg)", "translateX(200px)";





});
