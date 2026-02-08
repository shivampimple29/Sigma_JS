i = document.querySelector("input");
btn = document.querySelector("button");
ul = document.querySelector("ul");
div=document.querySelector("div");
let delAllBtn=document.createElement("button");
delAllBtn.innerText="Delete All";


btn.addEventListener("click", function (e) {
    e.stopPropagation();
    if(i.value==""){
        alert("Task can't be blank! Please try again!");
    }else{
        let li=document.createElement("li");
        li.innerText=i.value;
        ul.appendChild(li);

        i.value="";

        let delBtn=document.createElement("button");
        delBtn.innerText="Delete";
        li.appendChild(delBtn);

        if(ul.childElementCount==1){    
            div.appendChild(delAllBtn);
        }
    }
});
    ul.addEventListener("click", function(e){  
        
        if(e.target.nodeName=="BUTTON"){
            e.target.parentElement.remove();
        }
    });

    delAllBtn.addEventListener("click",function(){
        ul.innerHTML="";
        div.removeChild(delAllBtn);
    });
