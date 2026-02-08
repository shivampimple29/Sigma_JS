let btn=document.querySelector('button');
btn.addEventListener("click",()=>{
    console.log("Single Clicked!");
});

btn.nextElementSibling.addEventListener("dblclick",()=>{
    console.log("Doubled Clicked!");
});