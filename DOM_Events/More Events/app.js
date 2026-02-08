let form=document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    alert("form submitted");
});

form.addEventListener("change",function(e){
    console.log("change event fired");
    console.log("final value:",this.elements[0].value);
});

form.addEventListener("input",function(e){
    console.log("input event fired");
    console.log("current value:",this.elements[0].value);
});