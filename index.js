let btn = document.querySelector(".record-btn");

btn.addEventListener("click", function () {
//   console.log("function is working....");

let btn=document.querySelector(".record-btn");
btn.addEventListener("click",async function(){

let stream=await(navigator.mediaDevices.getDisplayMedia({video:true}))
//here , the simple access to window isn done...

});

});