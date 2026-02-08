let h1=document.querySelector('h1');

function colorChange(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            h1.style.color=color;
            resolve("color chnaged to "+color);
    },delay);
});
}

colorChange("red",1000)
.then(()=>{
    console.log("red color is applied");
    return colorChange("orange",1000);
})
.then(()=>{
    
    console.log("orange color is applied");
        return colorChange("green",1000);   
})
.then(()=>{
    console.log("green color is applied");
    return colorChange("blue",1000);
})
.then(()=>{ 
    console.log("blue color is applied");
})
.catch((error)=>{
    console.log("error is occured: "+error);    

});