function larger(n){
    let arr=[1,2,3,4,5];
    let yes=true;
    for(let i=0;i<arr.length;i++){
        if(n<arr[i]){
            yes=false; 
            console.log(arr[i]);
        }
        
    }
    if(yes){
        console.log(`${n} is largest.`);
    }

}

num=parseInt(prompt("enter a number :"));
larger(num);