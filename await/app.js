function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        let num=Math.floor(Math.random()*10)+1;
        console.log("random number is "+num);
        if(num>3){
            reject("error occured");
        }
        setTimeout(()=>{
            document.querySelector('h1').style.color=color;
            console.log("color is changed to "+color);
            resolve("color changed!");
        },delay);
    });
}

async function demo(){
    try{
    await changeColor("red",1000);
    await changeColor("blue",1000);
    await changeColor("green",1000);
    await changeColor("yellow",1000);
    await changeColor("purple",1000);
    }catch(err){
        console.log("\nerror caught"+err);
    }
    let r=5;
    console.log(r);
    console.log("new number is "+(r+3));
}

