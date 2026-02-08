const calc={
    add:function(a,b){
        return a+b;
    },
    sub:function (a,b) {
        return a-b;
      },
    mul:function(a,b){
        return a*b;
    },
    div:function(a,b){
        return a/b;
    }

};

let a=parseInt(prompt("Enter a number :"));
let b=parseInt(prompt("Enter a number :"));
let req=prompt("Enter a operation:");
if(req==='add' || req==='sub' || req==='mul' || req==='div' ){
    console.log(calc[req](a,b));
}
else{
    console.log("Invalid function.");
}
