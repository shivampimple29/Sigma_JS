let btn=document.querySelector('button');
btn.addEventListener('click',function(){
    this.style.backgroundColor="green";
    this.style.color="white";
});

let i=document.querySelector("input");
let h2=document.querySelector("h2");
i.addEventListener("input",function(){
    let filter=i.value.replace(/[^A-Za-z ]/g,"");
    h2.innerText=filter;
});