console.dir(document.getElementById("mainImg"));

let imgs=document.getElementsByClassName("oldImg");

for(let i=0;i<imgs.length;i++){
    console.dir(imgs[i]);
}

console.dir(document.getElementsByTagName("p"));
console.dir(document.querySelector("p"));
console.dir(document.querySelectorAll("p"));

let para=document.querySelector("p");
console.dir(para.innerText);
console.dir(para.innerHTML);
console.dir(para.textContent);

para.innerText="hello world";
para.innerHTML="<b>Peter Parker</b>";

let heading=document.querySelector("h1");
heading.innerHTML="<u>SpiderMan</u>";