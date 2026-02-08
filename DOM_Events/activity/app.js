let i=document.querySelector("input");
let p=document.querySelector('p');

i.addEventListener("input",function(event){
    p.innerText=this.value;
});