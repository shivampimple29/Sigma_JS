function table(n){
    for(let i=1;i<=10;i++){
        console.log(`${n}x${i}=${n*i}`);
    }
}

let num=parseInt(prompt("Enter a number"));
table(num);