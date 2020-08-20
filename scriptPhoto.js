


/*
var Friendsimages = 
function changeNYC(){
  nyc.src = (nyc.src == "https://i.imgur.com/47JRfeO.jpg" && nycchanged) ? "https://i.imgur.com/2PIeGAR.jpg" : "https://i.imgur.com/47JRfeO.jpg";
}
function changePark(){
  park.src = (park.src == "https://i.imgur.com/0cyH3tT.jpg") ? "https://i.imgur.com/TUGX9LW.jpg" : "https://i.imgur.com/0cyH3tT.jpg";
}
function changeBK(){
  bk.src = (bk.src == "https://i.imgur.com/qfWJQib.jpg") ? "https://i.imgur.com/vnr2XLA.jpg" : "https://i.imgur.com/qfWJQib.jpg";
}
function changeFriend(){
  friend.src = (friend.src == "https://i.imgur.com/XrgSJL7.jpg") ? "Park.jpg"
*/
nyc.addEventListener('mouseover',changeNYC)
nyc.addEventListener('mouseleave',stopImages)
park.addEventListener('mouseover',changePark)
park.addEventListener('mouseleave', stopImages)
bk.addEventListener('mouseover',changeBK)
bk.addEventListener('mouseleave', stopImages)
friend.addEventListener('mouseover',changeFriend)
friend.addEventListener('mouseleave', stopImages)


var loop;

function changeNYC(){
 var imageArray = [ "https://i.imgur.com/47JRfeO.jpg", "https://i.imgur.com/2PIeGAR.jpg", "New York.jpg", "New York1.JPG", "New York2.jpg"];

var image = document.getElementById("nyc");
  
  var i = 0
  loop = setInterval(function(){
    if(i==imageArray.length){
      i = 0
    }
    image.src= imageArray[i]
    i++
  }, 2000)
}

function changePark(){
var imageArray  = ["https://i.imgur.com/0cyH3tT.jpg", "https://i.imgur.com/TUGX9LW.jpg",  "Park.JPG", "Park1.jpg", "Park2.JPG"];
var image = document.getElementById("park");
  
  var i = 0
  loop = setInterval(function(){
    if(i==imageArray.length){
      i = 0
    }
    image.src= imageArray[i]
    i++
  }, 2000)
}

function changeBK(){
var imageArray  = ["https://i.imgur.com/qfWJQib.jpg", "https://i.imgur.com/vnr2XLA.jpg", "Brooklyn.jpg", "Brooklyn1.JPG", "Brooklyn2.JPG", "Brooklyn3.JPG", "Brooklyn4.JPG", "Brooklyn5.jpg"];
var image = document.getElementById("bk");
  
  var i = 0
  loop = setInterval(function(){
    if(i==imageArray.length){
      i = 0
    }
    image.src= imageArray[i]
    i++
  }, 2000)
}

function changeFriend(){
var imageArray  = [ "https://i.imgur.com/XrgSJL7.jpg", "https://i.imgur.com/gj1RxHy.jpg","Friend1.JPG", "Friend2.JPG", "Friend3.jpg", "Friend4.jpg", "Friend5.jpg", "Friends6.jpg"];
var image = document.getElementById("friend");
  
  var i = 0
  loop = setInterval(function(){
    if(i==imageArray.length){
      i = 0
    }
    image.src= imageArray[i]
    i++
  }, 2000)
}

function stopImages(){
  clearInterval(loop)
}