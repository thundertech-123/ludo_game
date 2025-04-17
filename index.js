var btn = document.querySelector("button")
var img1 = document.querySelector("img")
 
btn.addEventListener("click",function(){
    var x = Math.ceil(Math.random()*6)
    img1.src="dice-"+ x +'.jpg'
 
 

})