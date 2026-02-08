let btn=document.querySelector("button");
let div=document.querySelector("div");
let h=document.querySelector('h1');


btn.addEventListener("click",()=>{
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    
    h.innerText=`( ${r} , ${g} , ${b} )`;

    div.style.backgroundColor=`rgb(${r},${g},${b})`;
});
