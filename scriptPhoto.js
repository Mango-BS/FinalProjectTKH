var nyc = document.getElementById("nyc");
var park = document.getElementById("park");
var bk = document.getElementById("bk");
var friend = document.getElementById("friend");


function changeNYC(){
  nyc.src = (nyc.src == "https://i.imgur.com/47JRfeO.jpg") ? "https://i.imgur.com/2PIeGAR.jpg" : "https://i.imgur.com/47JRfeO.jpg";
}
function changePark(){
  park.src = (park.src == "https://i.imgur.com/0cyH3tT.jpg") ? "https://i.imgur.com/TUGX9LW.jpg" : "https://i.imgur.com/0cyH3tT.jpg";
}
function changeBK(){
  bk.src = (bk.src == "https://i.imgur.com/qfWJQib.jpg") ? "https://i.imgur.com/vnr2XLA.jpg" : "https://i.imgur.com/qfWJQib.jpg";
}
function changeFriend(){
  friend.src = (friend.src == "https://i.imgur.com/XrgSJL7.jpg") ? "https://i.imgur.com/gj1RxHy.jpg" : "https://i.imgur.com/XrgSJL7.jpg";
}


nyc.addEventListener('mouseover',changeNYC)
nyc.addEventListener('mouseleave',changeNYC)
park.addEventListener('mouseover',changePark)
park.addEventListener('mouseleave', changePark)
bk.addEventListener('mouseover',changeBK)
bk.addEventListener('mouseleave', changeBK)
friend.addEventListener('mouseover',changeFriend)
friend.addEventListener('mouseleave', changeFriend)