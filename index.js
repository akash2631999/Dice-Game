var randomnumber1 = Math.floor( Math.random() * 6) + 1;
var randomdiceimage = "dice"+randomnumber1+".png";

var randomimagesource = "images/" + randomdiceimage;

var image1 =document.querySelector(".img1");

image1.setAttribute("src" , randomimagesource);


var randomnumber2 = Math.floor( Math.random() * 6) + 1;
var randomdiceimage2 = "dice"+randomnumber2+".png";

var randomimagesource2 = "images/" + randomdiceimage2;

var image2 =document.querySelector(".img2");

image2.setAttribute("src" , randomimagesource2);


var showtext = document.querySelector("h1");

if(randomnumber1===randomnumber2){
    showtext.innerHTML="Noone wins it's a Draw";
}
else if(randomnumber2 > randomnumber1){
    showtext.innerHTML="Congratulations &#x1F6A9 Player 2 wins";
}
else{
    showtext.innerHTML="Congratulations &#x1F6A9 Player 1 wins";
}