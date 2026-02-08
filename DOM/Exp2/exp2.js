//Q1 
let btn1=document.createElement("button");
btn1.innerText="Click Me";
document.querySelector("body").append(btn1);

//Q2
let i1=document.createElement("input");
document.querySelector("body").append(i1);

btn1.setAttribute("id","btn");
i1.setAttribute("placeholder","username");

// Q3
btn1.style.color="white";
btn1.style.backgroundColor="blue";


// Q4
let h1=document.createElement("h1");
h1.innerHTML="<u>DOM Practice</u>";
h1.style.color="purple";
document.querySelector("body").append(h1);


// Q5
let p1=document.createElement("p");
p1.innerHTML="Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p1);