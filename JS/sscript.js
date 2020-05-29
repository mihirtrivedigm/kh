var number = 0;
var userNumber = 0;
var level = 0;
var numberArray = [];
var userArray = [];

function start() {
  $(".drum").prop('disabled', false);
  userArray = [];
  numberArray = [];
  level++;
  for (i = 0; i < level; i++) {
    number = Math.floor(Math.random() * 6) + 1;
    numberArray.push(number);
    number == 1 ? nextMove(number1) : {}
    number == 2 ? nextMove(number2) : {}
    number == 3 ? nextMove(number3) : {}
    number == 4 ? nextMove(number4) : {}
    number == 5 ? nextMove(number5) : {}
    number == 6 ? nextMove(number6) : {}
    userArray = [];
  }

}

$("#number1").mouseover(function() {
  $("#number1").click(function() {
    userArray.push(1);
    alert("hovered and clicked");
    if (userArray.length == numberArray.length) {
      check(numberArray, userArray);
      $(".drum").prop('disabled', true);
      userArray = [];
    }
  })
})
$("#number2").mouseover(function() {
  $("#number2").click(function() {
    alert("hovered and clicked");
    userArray.push(2);
    if (userArray.length == numberArray.length) {
      check(numberArray, userArray);
      $(".drum").prop('disabled', true);
      userArray = [];
    }
  })
})
$("#number3").mouseover(function() {
  $("#number3").click(function() {
    alert("hovered and clicked");
    userArray.push(3);
    if (userArray.length == numberArray.length) {
      check(numberArray, userArray);
      $(".drum").prop('disabled', true);
      userArray = [];
    }
  })
})
$("#number4").mouseover(function() {
  $("#number4").click(function() {
    alert("hovered and clicked");
    userArray.push(4);
    if (userArray.length == numberArray.length) {
      check(numberArray, userArray);
      $(".drum").prop('disabled', true);
      userArray = [];
    }
  })
})
$("#number5").mouseover(function() {
  $("#number5").click(function() {
    alert("hovered and clicked");
    userArray.push(5);
    if (userArray.length == numberArray.length) {
      check(numberArray, userArray);
      $(".drum").prop('disabled', true);
      userArray = [];
    }
  })
})
$("#number6").mouseover(function() {
  $("#number6").click(function() {
    alert("hovered and clicked");
    userArray.push(6);
    if (userArray.length == numberArray.length) {
      check(numberArray, userArray);
      $(".drum").prop('disabled', true);
      userArray = [];
    }
  })
})

// $("#number6").mouseover(function() {
//   $("#number6").click(function() {
//     check(number, 6);
//   })
// })


function nextMove(passedNumber) {
  setTimeout(function() {
    $(passedNumber).click().addClass("move");
  }, 1000);
  setTimeout(function() {
    $(passedNumber).removeClass("move");
  }, 1200);
  userArray = [];
}

function check(numberArray, userArray) {
  numberArray.length == userArray.length ? $("#heading").text("Correct") : $("#heading").text("Wrong")
  userArray = [];
  //numberArray.every(function(value, index) { return value === userArray[index]}) ? $("#heading").text("Correct") : $("#heading").text("Wrong")
  //number == userNumber ? $("#heading").text("Correct") : $("#heading").text("Wrong")
  $("#play").text("Play again");
  $("#level").text("length: " + numberArray.length);
}
