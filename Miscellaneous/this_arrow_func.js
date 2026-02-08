const student={
    namee:"Shivam",
    age:20,
    dob:"29 Aug",
    prop:this, //global scope
    getName:function(){
        console.log(this);
        return this.namee;
    },
    getMarks:()=>{
        console.log(this);
        return this.marks; //parent's scope
    },
    getInfo1:function(){
        setTimeout(()=>{
            console.log(this);//student
        },2000);

    },
    getInfo2:function(){
        setTimeout( function() {
            console.log(this);//window
        },2000);

    },
};



