const student={
    namee:"Shivam",
    marks:100,
    age:20,
    phy:96,
    maths:95,
    chem:94,
    getAvg(){
        let avg=(this.maths+this.phy+this.chem)/3;
        console.log(avg);
    }
}

student.getAvg();