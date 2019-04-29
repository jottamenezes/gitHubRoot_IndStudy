'use strict';

var img1 = document.querySelector('#img1');
var arrowLeft = document.querySelector('#arrowLeft');
var closeButton = document.querySelector('#closeButton');

arrowLeft.addEventListener('hover', function() {
  // console.log('mousedown on button');
  img1.style.opacity = "0.2";



});
