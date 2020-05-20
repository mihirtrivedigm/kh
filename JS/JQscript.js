// $(ducument).ready(
// function(e){
// $("h1").html(e.key);
// }
// );

$(document).keypress(
function(event){
//$("#title").text(event.key);
$("#title").append(event.key);
}
);

$("button").css("color","blue");
$("#button1").html("pim-pom");

$("#devat").click(
function(){
$("#devat").html("<button>Aaaj thi hu batan</button>")
}
);
