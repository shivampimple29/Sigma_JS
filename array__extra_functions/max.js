let arr=[1,2,3,4,5];
max=arr.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
});

console.log(max);