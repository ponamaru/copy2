document.write( '<img src="stick.png" id="stickbody" width="600">' );
document.write( '<img src="stick.png" id="leftleg" class="leftleg" width="600">' );
document.write( '<img src="stick.png" id="rightleg" class="rightleg" width="600">' );
document.write( '<div class="item rotateX" id="stickface" width="600"><div id="face2" class="item2"><img src="stickhead.png" id="stickhead" type="file1" class="red" width="600"><div class="re-wrap" id="stickeye3"><img src="stickeye3.png" id="stickeye" class="re" width="600"></div></div></div>' );

toggleClass();
function toggleClass() {
  const element = document.getElementById("stickface");
  if (element.classList.contains("rotatoX")) {
    element.classList.remove("rotatoX");
    element.classList.add("nll");
  } else {
    element.classList.remove("nll");
    element.classList.add("rotatoX");
  }
}
function toggleClass1() {
  const element = document.getElementById("stickeye");
  if (element.classList.contains("re")) {
    element.classList.remove("re");
    element.classList.add("nll");
  } else {
    element.classList.remove("nll");
    element.classList.add("re");
  }
}

function toggleClass2() {
  const element = document.getElementById("leftleg");
  if (element.classList.contains("leftleg")) {
    element.classList.remove("leftleg");
    element.classList.add("blue");
  } else {
    element.classList.remove("blue");
    element.classList.add("leftleg");
  }
}

function toggleClass3() {
  const element = document.getElementById("rightleg");
  if (element.classList.contains("rightleg")) {
    element.classList.remove("rightleg");
    element.classList.add("rlm");
  } else {
    element.classList.remove("rlm");
    element.classList.add("rightleg");
  }
}

var y = 300;
var x = 700;

function bodylink() {

document.getElementById( 'stickhead' ).style.top = y + "px";
document.getElementById( 'stickhead' ).style.left = x + "px";

document.getElementById( 'stickeye3' ).style.top = y -40 + "px";
document.getElementById( 'stickeye3' ).style.left = x + "px";

document.getElementById( 'stickbody' ).style.top = y -30 + "px";
document.getElementById( 'stickbody' ).style.left = x -15 + "px";

document.getElementById( 'leftleg' ).style.top = y +40 + "px";
document.getElementById( 'leftleg' ).style.left = x -15 + "px";

document.getElementById( 'rightleg' ).style.top = y +40 + "px";
document.getElementById( 'rightleg' ).style.left = x -15 + "px";
}

let intervalID = setInterval(bodylink);

function toggleClas() {
  const element = document.getElementById("stickface");
  if (element.classList.contains("rotatoX")) {
    element.classList.remove("rotatoX");
    element.classList.add("nll");
  }
}

function toggleClas1() {
  const element = document.getElementById("stickeye");
  if (element.classList.contains("re")) {
    element.classList.remove("re");
    element.classList.add("nll");
  }
}

function toggleClas2() {
  const element = document.getElementById("leftleg");
  if (element.classList.contains("leftleg")) {
    element.classList.remove("leftleg");
    element.classList.add("blue");
  }
}

function toggleClas3() {
  const element = document.getElementById("rightleg");
  if (element.classList.contains("rightleg")) {
    element.classList.remove("rightleg");
    element.classList.add("rlm");
  } 
}

function toggleClass4() {
  const element = document.getElementById("stickhead");
  if (element.classList.contains("righthead")) {
  } else {
    element.classList.remove("lefthead");
    element.classList.add("righthead");
  }
cos2();
cos4();
}

function toggleClass5() {
  const element = document.getElementById("stickhead");
  if (element.classList.contains("righthead")) {
    element.classList.remove("righthead");
    element.classList.add("lefthead");
  }
cos();
cos3();
}

function pm() {
toggleClas();
toggleClas1();
toggleClas2();
toggleClas3();
}

function cos() {
    const changeimg = document.getElementById("stickeye");
    changeimg.src = "stickeye3.png";
}

function cos2() {
    const changeimg = document.getElementById("stickeye");
    changeimg.src = "stickeye5.png";
}

function cos3() {
    const changeimg = document.getElementById("stickhead");
    changeimg.src = "stickhead.png";
}

function cos4() {
    const changeimg = document.getElementById("stickhead");
    changeimg.src = "stickhead7.png";
}

function pm1() {
toggleClass();
toggleClass1();
toggleClass2();
toggleClass3();
}

addEventListener( "keyup", pm1 );

function pm1() {

var key_code = event.keyCode;

if( key_code === 37 ) {
toggleClass();
toggleClass1();
toggleClass2();
toggleClass3();
}
if( key_code === 39 ) {
toggleClass();
toggleClass1();
toggleClass2();
toggleClass3();
}
}

addEventListener( "keyup", pm1 );

function pm1() {
if(walk === 2) {
var key_code = event.keyCode;

if( key_code === 37 ) {
toggleClass();
toggleClass1();
toggleClass2();
toggleClass3();
}
if( key_code === 39 ) {
toggleClass();
toggleClass1();
toggleClass2();
toggleClass3();
}
}
}

addEventListener( "keydown", keydownfunc1 );

function keydownfunc1( event ) {
if(walk === 2) {
	var key_code = event.keyCode;

        if(x > 10) {
	if( key_code === 37 ) {
        toggleClass5();
        pm();
        }
	}
        if(x < 1100) {
	if( key_code === 39 ) {
        toggleClass4();
        pm();
        }
        }
}
}

addEventListener( "keyup", keyupfunc1 );

function keyupfunc1( event ) {
if(walk === 2) {
	var key_code = event.keyCode;

        if(x < 10) {
	if( key_code === 37 ) {
        pm();	
        toggleClass5();
        }
	}
        if(x > 1100) {
	if( key_code === 39 ) {
        pm();
        toggleClass4();
        }
        }
    }
}
addEventListener( "keydown", keydownfunc );

function keydownfunc( event ) {
if(walk === 1){
	var key_code = event.keyCode;

        if(x > 10) {
	if( key_code === 37 ) x -= 5;	
	}
        if(x < 1100) {
	if( key_code === 39 ) x += 5;
        }

	document.getElementById( 'stickhead' ).style.top = y + "px";
	document.getElementById( 'stickhead' ).style.left = x + "px";
document.getElementById( 'stickface' ).style.top = y + "px";
document.getElementById( 'stickface' ).style.left = x + "px";

		}
}
addEventListener( "keydown", lrfunc );
function lrfunc( event ) {
if(walk === 2) {
	var key_code = event.keyCode;

	if( key_code === 37 ) lr = 1;
	if( key_code === 39 ) lr = 2;
}
}
var lr = 1;
var y = 300;
var x = 500;
var stageX = 0;
var stageY = 0;
var walk = 2;
	document.getElementById( 'stickhead' ).style.top = y + "px";
	document.getElementById( 'stickhead' ).style.left = x + "px";
	document.getElementById( 'img1' ).style.left = stageX + "px";
addEventListener( "keydown", keydownfunc );

function keydownfunc( event ) {
if(walk === 2){
	var key_code = event.keyCode;
if(stageX > -2000) {
	if( key_code === 39 ) {
        stageX -= 10;
        }
}
if(stageX < 670) {
	if( key_code === 37 ) {
        stageX += 10;
        }
        }
	document.getElementById( 'img1' ).style.top = stageY + "px";
	document.getElementById( 'img1' ).style.left = stageX + "px";
}
}

var nowtext = 3;

function poteto() {
const image = document.getElementById('face2'); 

image.animate(
  [
    { transform: 'rotate(0deg)' }, 
    { transform: 'rotate(15deg)' } 
  ], 
  // タイミングに関する設定
  {
    fill: 'backwards', 
    duration: 250,  
  },
);
const image2 = document.getElementById('face2'); 
image2.style.transform = `rotate(15deg)`;
}

function poteto2() {
const image = document.getElementById('face2'); 

image.animate(
  [
    { transform: 'rotate(15deg)' }, 
    { transform: 'rotate(0deg)' } 
  ], 
  // タイミングに関する設定
  {
    fill: 'backwards', 
    duration: 250,  
  },
);
const image2 = document.getElementById('face2'); 
image2.style.transform = `rotate(0deg)`;
}
function poteto3() {
const image = document.getElementById('face2'); 

image.animate(
  [
    { transform: 'rotate(0deg)' }, 
    { transform: 'rotate(-15deg)' } 
  ], 
  // タイミングに関する設定
  {
    fill: 'backwards', 
    duration: 250,  
  },
);
const image2 = document.getElementById('face2'); 
image2.style.transform = `rotate(-15deg)`;
}

function poteto4() {
const image = document.getElementById('face2'); 

image.animate(
  [
    { transform: 'rotate(-15deg)' }, 
    { transform: 'rotate(0deg)' } 
  ], 
  // タイミングに関する設定
  {
    fill: 'backwards', 
    duration: 250,  
  },
);
const image2 = document.getElementById('face2'); 
image2.style.transform = `rotate(0deg)`;
}

function audio1() {
const audio = new Audio('seeking.mp3');
audio.play();
}