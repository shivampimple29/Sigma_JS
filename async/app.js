async function greet(){
    // throw "404 page not found";
    return "hello world";
}
greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result :",result);
})
.catch((error)=>{
    console.log("promise was rejected with error :",error);
});

let demo=async()=>{
    throw "404 page not found";
}
