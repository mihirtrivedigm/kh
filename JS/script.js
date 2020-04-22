function throwDies(){
var numb1 = Math.floor(Math.random() * 6) + 1;
var numb2 = Math.floor(Math.random() * 6) + 1;

if(numb1=="1")
{
document.getElementById("firstOutput").innerHTML = "<img src='IMG/one.png'>"
}
if(numb1=="2")
{
document.getElementById("firstOutput").innerHTML = "<img src='IMG/two.png'>"
}
if(numb1=="3")
{
document.getElementById("firstOutput").innerHTML = "<img src='IMG/three.png'>"
}
if(numb1=="4")
{
document.getElementById("firstOutput").innerHTML = "<img src='IMG/four.png'>"
}
if(numb1=="5")
{
document.getElementById("firstOutput").innerHTML = "<img src='IMG/five.png'>"
}
if(numb1=="6")
{
document.getElementById("secondOutput").innerHTML = "<img src='IMG/six.png'>"
}

if(numb2=="1")
{
document.getElementById("secondOutput").innerHTML = "<img src='IMG/one.png'>"
}
if(numb2=="2")
{
document.getElementById("secondOutput").innerHTML = "<img src='IMG/two.png'>"
}
if(numb2=="3")
{
document.getElementById("secondOutput").innerHTML = "<img src='IMG/three.png'>"
}
if(numb2=="4")
{
document.getElementById("secondOutput").innerHTML = "<img src='IMG/four.png'>"
}
if(numb2=="5")
{
document.getElementById("secondOutput").innerHTML = "<img src='IMG/five.png'>"
}
if(numb2=="6")
{
document.getElementById("secondOutput").innerHTML = "<img src='IMG/six.png'>"
}

if(numb1==numb2)
{
  document.getElementById("finalResult").innerHTML = "Its a Tie. Try again if you wish."
}
else if(numb1>numb2)
{
document.getElementById("finalResult").innerHTML = "Player 1 is the Winner"
}
else if(numb1<numb2){
  document.getElementById("finalResult").innerHTML = "Player 2 is the Winner."
}


}
