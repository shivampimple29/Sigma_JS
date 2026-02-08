function multipleGreet(msg,count){
    for(let i=1;i<=count;i++){
        msg();
    }
}

let greet=function(){
    console.log("hello");
}
multipleGreet(greet,100);

/*multipleGreet(function() {console.log("hello")},100)*/