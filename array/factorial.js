let num=prompt("Enter a num: ");
num=parseInt(num);

if(num<0){
    console.log(`Factorial of ${num} doesnot exist.`);
}

else if(num===0 || num===1){
    console.log(`Factorial of ${num} is 1`);
}
else{
    let fact=1;
    for(let i=2;i<=num;i++){
        fact*=i;
    }
    console.log(`Factorial of ${num} is ${fact}`);
}