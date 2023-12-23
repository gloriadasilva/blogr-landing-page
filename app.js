const connectArrow = document.querySelector(".connectArrow");
const connectChildren = document.querySelector(".connectChildren");

connectArrow.addEventListener("click", function(){
   
   let clickin = connectChildren.classList.toggle("showChild");

});


const menu = document.querySelector(".menu");
const navList = document.querySelector(".navList");
const closed = document.querySelector(".closed");
menu.addEventListener("click", function(){
   let clickMen = navList.classList.toggle("show");

});
// close btn

closed.addEventListener("click", function(){
    navList.classList.remove("show");
});