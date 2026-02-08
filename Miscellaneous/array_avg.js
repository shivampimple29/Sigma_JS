const avg=(arr)=>{
    let c=0,sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        c++;
    }
    return sum/c;
};
let arr=[1,2,3,4,5];
    console.log(avg(arr));