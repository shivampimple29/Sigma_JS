let btn=document.querySelector("button");
let p=document.querySelector("p");
let h3=document.querySelector("h3");
let h1=document.querySelector("h1");

function invisible(){
    console.dir(this.innerText);
    this.style.opacity="0";
};

btn.addEventListener("mouseenter", invisible);
p.addEventListener("mouseenter", invisible);
h3.addEventListener("mouseenter", invisible);
h1.addEventListener("mouseenter", invisible);   



