let form=document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    // alert("response has been submitted");
    let user=document.querySelector("#user");
    let pass=document.querySelector("#pass");
    // this.elements[0] or form.elements[0]
    // this.elements[1] or form.elements[1]

    console.log("Username:",user.value);    
    console.log("Password:",pass.value);
    alert(`Hi ${user.value} yout password is set to ${pass.value}`);
});