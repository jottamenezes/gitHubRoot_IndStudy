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
  var anim6a = document.querySelector('#principle6-1');
  var anim6b = document.querySelector('#principle6-2');
  var anim6c = document.querySelector('#principle6-3');
var anim7 = document.querySelector('#principle-7');
var anim8 = document.querySelector('#principle-8');
  var anim8a = document.querySelector('#principle8-1');
  var anim8b = document.querySelector('#principle8-2');
var anim9 = document.querySelector('#principle-9');
  var anim9a = document.querySelector('#principle9-1');
  var anim9b = document.querySelector('#principle9-2');
var anim10 = document.querySelector('#principle-10');
  var anim10a = document.querySelector('#principle10-1');
  var anim10b = document.querySelector('#principle10-2');
var anim11 = document.querySelector('#principle-11');
var anim12 = document.querySelector('#principle-12');



// GETTING PRINCIPLE TITLES
// var animTitle = document.querySelector('.principleTitle');
var animTitle1 = document.getElementById("div1").getElementsByClassName("principleTitle")[0];
var animTitle2 = document.getElementById("div2").getElementsByClassName("principleTitle")[0];
var animTitle3 = document.getElementById("div3").getElementsByClassName("principleTitle")[0];
var animTitle4 = document.getElementById("div4").getElementsByClassName("principleTitle")[0];
var animTitle5 = document.getElementById("div5").getElementsByClassName("principleTitle")[0];
var animTitle6 = document.getElementById("div6").getElementsByClassName("principleTitle")[0];
var animTitle7 = document.getElementById("div7").getElementsByClassName("principleTitle")[0];
var animTitle8 = document.getElementById("div8").getElementsByClassName("principleTitle")[0];
var animTitle9 = document.getElementById("div9").getElementsByClassName("principleTitle")[0];
var animTitle10 = document.getElementById("div10").getElementsByClassName("principleTitle")[0];
var animTitle11 = document.getElementById("div11").getElementsByClassName("principleTitle")[0];
var animTitle12 = document.getElementById("div12").getElementsByClassName("principleTitle")[0];


// ANIMATING DIV 1 ON HOVER
div1.addEventListener('mouseover', overDiv1);

function overDiv1() {
  console.log('over Div1');
  div1.style.backgroundColor = 'hsl(194, 36%, 5%)';
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
  div1.style.backgroundColor = 'hsl(194, 36%, 10%)';

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


  div2.style.backgroundColor = 'hsl(194, 36%, 5%)';
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
  div2.style.backgroundColor = 'hsl(210, 34%, 9%)';
  anim2.style.animationPlayState = "running";
  anim2.style.opacity = "1";


  // TITLEOUT
  animTitle2.style.opacity = "0";
  animTitle2.style.transform = " translateY(200%)";



}



// ANIMATING DIV 1 ON HOVER
div3.addEventListener('mouseover', overDiv3);

function overDiv3() {
  console.log('over Div1');
  div3.style.backgroundColor = 'hsl(194, 36%, 5%)';
  anim3.style.animationPlayState = 'paused';
  anim3.style.opacity = "0.3";

  // ANIMATING TITLE
  animTitle3.style.opacity = "1";
  animTitle3.style.transform = "translateY(0%)";
}

// ANIMATING DIV 1 ON MOUSEOUT
div3.addEventListener('mouseout', leaveDiv3);

function leaveDiv3() {
  console.log('leave Div1');
  div3.style.backgroundColor = 'hsl(194, 36%, 10%)';

  anim3.style.animationPlayState = "running";
  anim3.style.opacity = "1";

  // ANIMATING TITLE
  animTitle3.style.opacity = "0";
  animTitle3.style.transform = " translateY(200%)";
}



// ANIMATING DIV 4 ON HOVER
div4.addEventListener('mouseover', overDiv4);

function overDiv4() {
  console.log('over Div1');
  div4.style.backgroundColor = 'hsl(228, 34%, 5%)';
  anim4.style.animationPlayState = 'paused';
  anim4.style.opacity = "0.3";

  // ANIMATING TITLE
  animTitle4.style.opacity = "1";
  animTitle4.style.transform = "translateY(0%)";
}

// ANIMATING DIV 4 ON MOUSEOUT
div4.addEventListener('mouseout', leaveDiv4);

function leaveDiv4() {
  console.log('leave Div4');
  div4.style.backgroundColor = 'hsl(247, 34%, 10%)';

  anim4.style.animationPlayState = "running";
  anim4.style.opacity = "1";

  // ANIMATING TITLE
  animTitle4.style.opacity = "0";
  animTitle4.style.transform = " translateY(200%)";
}


// ANIMATING DIV 5 ON HOVER
div5.addEventListener('mouseover', overDiv5);

function overDiv5() {
  console.log('over Div1');
  div5.style.backgroundColor = 'hsl(228, 35%, 5%)';
  anim5.style.animationPlayState = 'paused';
  anim5.style.opacity = "0.3";

  // ANIMATING TITLE
  animTitle5.style.opacity = "1";
  animTitle5.style.transform = "translateY(0%)";
}

// ANIMATING DIV 5 ON MOUSEOUT
div5.addEventListener('mouseout', leaveDiv5);

function leaveDiv5() {
  console.log('leave Div5');
  div5.style.backgroundColor = 'hsl(257, 35%, 10%)';

  anim5.style.animationPlayState = "running";
  anim5.style.opacity = "1";

  // ANIMATING TITLE
  animTitle5.style.opacity = "0";
  animTitle5.style.transform = " translateY(200%)";
}



// ANIMATING DIV 6 ON HOVER
div6.addEventListener('mouseover', overDiv6);

function overDiv6() {
  console.log('over Div1');
  div6.style.backgroundColor = 'hsl(228, 35%, 5%)';
  anim6.style.animationPlayState = 'paused';
  anim6.style.opacity = "0.3";
  anim6a.style.animationPlayState = 'paused';
    anim6b.style.animationPlayState = 'paused';
      anim6c.style.animationPlayState = 'paused';
  // ANIMATING TITLE
  animTitle6.style.opacity = "1";
  animTitle6.style.transform = "translateY(0%)";
}

// ANIMATING DIV 6 ON MOUSEOUT
div6.addEventListener('mouseout', leaveDiv6);

function leaveDiv6() {
  console.log('leave Div6');
  div6.style.backgroundColor = 'hsl(267, 36%, 10%)';
  anim6a.style.animationPlayState = 'running';
    anim6b.style.animationPlayState = 'running';
      anim6c.style.animationPlayState = 'running';

  anim6.style.opacity = "1";

  // ANIMATING TITLE
  animTitle6.style.opacity = "0";
  animTitle6.style.transform = " translateY(200%)";
}



// ANIMATING DIV 7 ON HOVER
div7.addEventListener('mouseover', overDiv7);

function overDiv7() {
  console.log('over Div1');
  div7.style.backgroundColor = 'hsl(228, 35%, 5%)';
  anim7.style.animationPlayState = 'paused';
  anim7.style.opacity = "0.3";

  // ANIMATING TITLE
  animTitle7.style.opacity = "1";
  animTitle7.style.transform = "translateY(0%)";
}

// ANIMATING DIV 7 ON MOUSEOUT
div7.addEventListener('mouseout', leaveDiv7);

function leaveDiv7() {
  console.log('leave Div7');
  div7.style.backgroundColor = 'hsl(277, 37%, 10%)';

  anim7.style.animationPlayState = "running";
  anim7.style.opacity = "1";

  // ANIMATING TITLE
  animTitle7.style.opacity = "0";
  animTitle7.style.transform = " translateY(200%)";
}


// ANIMATING DIV 8 ON HOVER
div8.addEventListener('mouseover', overDiv8);

function overDiv8() {
  console.log('over Div1');
  div8.style.backgroundColor = 'hsl(228, 35%, 5%)';
  anim8a.style.animationPlayState = 'paused';
    anim8b.style.animationPlayState = 'paused';
  anim8.style.opacity = "0.3";

  // ANIMATING TITLE
  animTitle8.style.opacity = "1";
  animTitle8.style.transform = "translateY(0%)";
}

// ANIMATING DIV 8 ON MOUSEOUT
div8.addEventListener('mouseout', leaveDiv8);

function leaveDiv8() {
  console.log('leave Div8');
  div8.style.backgroundColor = 'hsl(288, 38%, 10%)';

  anim8a.style.animationPlayState = 'running';
    anim8b.style.animationPlayState = 'running';
  anim8.style.opacity = "1";

  // ANIMATING TITLE
  animTitle8.style.opacity = "0";
  animTitle8.style.transform = " translateY(200%)";
}




// ANIMATING DIV 9 ON HOVER
div9.addEventListener('mouseover', overDiv9);

function overDiv9() {
  console.log('over Div1');
  div9.style.backgroundColor = 'hsl(229, 35%, 5%)';
  anim9a.style.animationPlayState = 'paused';
  anim9b.style.animationPlayState = 'paused';

  anim9.style.opacity = "0.3";

  // ANIMATING TITLE
  animTitle9.style.opacity = "1";
  animTitle9.style.transform = "translateY(0%)";
}

// ANIMATING DIV 9 ON MOUSEOUT
div9.addEventListener('mouseout', leaveDiv9);

function leaveDiv9() {
  console.log('leave Div9');
  div9.style.backgroundColor = 'hsl(299, 39%, 10%)';

  anim9a.style.animationPlayState = "running";
    anim9b.style.animationPlayState = "running";
  anim9.style.opacity = "1";

  // ANIMATING TITLE
  animTitle9.style.opacity = "0";
  animTitle9.style.transform = " translateY(200%)";
}




// ANIMATING DIV 10 ON HOVER
div10.addEventListener('mouseover', overDiv10);

function overDiv10() {
  console.log('over Div1');
  div10.style.backgroundColor = 'hsl(20, 34%, 10%)';
  anim10.style.animationPlayState = 'paused';
  anim10.style.opacity = "0.3";

  // ANIMATING TITLE
  animTitle10.style.opacity = "1";
  animTitle10.style.transform = "translateY(0%)";
}

// ANIMATING DIV 10 ON MOUSEOUT
div10.addEventListener('mouseout', leaveDiv10);

function leaveDiv10() {
  console.log('leave Div10');
  div10.style.backgroundColor = 'hsl(299, 39%, 10%)';

  anim10.style.animationPlayState = "running";
  anim10.style.opacity = "1";

  // ANIMATING TITLE
  animTitle10.style.opacity = "0";
  animTitle10.style.transform = " translateY(200%)";
}


// ANIMATING DIV 11 ON HOVER
div11.addEventListener('mouseover', overDiv11);

function overDiv11() {
  console.log('over Div1');
  div11.style.backgroundColor = 'hsl(2211, 35%, 5%)';
  anim11.style.animationPlayState = 'paused';
  anim11.style.opacity = "0.3";

  // ANIMATING TITLE
  animTitle11.style.opacity = "1";
  animTitle11.style.transform = "translateY(0%)";
}

// ANIMATING DIV 11 ON MOUSEOUT
div11.addEventListener('mouseout', leaveDiv11);

function leaveDiv11() {
  console.log('leave Div11');
  div11.style.backgroundColor = 'hsl(20, 34%, 9%)';


  anim11.style.animationPlayState = "running";
  anim11.style.opacity = "1";

  // ANIMATING TITLE
  animTitle11.style.opacity = "0";
  animTitle11.style.transform = " translateY(200%)";
}


// ANIMATING DIV 12 ON HOVER
div12.addEventListener('mouseover', overDiv12);

function overDiv12() {
  console.log('over Div1');
  div12.style.backgroundColor = 'hsl(2212, 35%, 5%)';
  anim12.style.animationPlayState = 'paused';
  anim12.style.opacity = "0.3";

  // ANIMATING TITLE
  animTitle12.style.opacity = "1";
  animTitle12.style.transform = "translateY(0%)";
}

// ANIMATING DIV 12 ON MOUSEOUT
div12.addEventListener('mouseout', leaveDiv12);

function leaveDiv12() {
  console.log('leave Div12');
  div12.style.backgroundColor = 'hsl(21212, 312%, 12%)';

  anim12.style.animationPlayState = "running";
  anim12.style.opacity = "1";

  // ANIMATING TITLE
  animTitle12.style.opacity = "0";
  animTitle12.style.transform = " translateY(200%)";
}






// CHECKING WINDOW

window.addEventListener('resize', getWindowWidth);

function getWindowWidth() {
  windowW = window.innerWidth;
  console.log('The Viewport is : ' + windowW);

}
