function number1(){
$("#sound1")[0].play();
var b = document.getElementById("number2");
 b.click();
//$("#number2")[0].click();
}

$("#number2").click(function(){
$("#sound2")[0].play();
alert("number 2 clicked");
});

 function number2(){
 $("#sound2")[0].play();
 }


function number3(){
$("#sound3")[0].play();
alert("number 3 clicked");
}

function number4(){
$("#sound4")[0].play();
}

function number5(){
$("#sound5")[0].play();
}

function number6(){
$("#sound6")[0].play();
}

var number = Math.floor(Math.random() * 6) + 1;
setTimeout(function() { number3(); }, 1000);
var numberArray = [];
numberArray.push(number);
