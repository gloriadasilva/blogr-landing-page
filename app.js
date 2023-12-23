const connectArrow = document.querySelector(".connectArrow");
const connectChildren = document.querySelector(".connectChildren")


connectArrow.addEventListener("click", function(){
   
   let clickin = connectChildren.classList.toggle("showChild");

})

const menu = document.querySelector(".menu");
const navList = document.querySelector(".navList");
const close = document.querySelector(".close");
menu.addEventListener("click", function(){
   let clickMen = navList.classList.toggle("show");

});