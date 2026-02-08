function sum_of_n(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return(sum);
}

let num=parseInt(prompt("Enter a number :"));
ans=sum_of_n(num);
console.log(`Sum of first ${num} natural number is ${ans}`);