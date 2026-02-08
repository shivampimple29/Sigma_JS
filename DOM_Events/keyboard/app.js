let i=document.querySelector("input");

// i.addEventListener("keydown",function(e){
//     console.log("key was pressed");
//     console.log("key is      :",e.key)
//     console.log("key code is :",e.code);
// });

i.addEventListener("keyup",function(e){
    console.log("Key is : ",e.key);
    if(e.key=="ArrowUp"){
        console.log("Move forward");
    }else if(e.key=="ArrowDown"){
        console.log("Move backward");   
    }else if(e.key=="ArrowLeft"){
        console.log("Move left");   
    }else if(e.key=="ArrowRight"){
        console.log("Move right");
    }else{
        console.log("No movement");
    }
});