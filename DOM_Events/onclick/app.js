// btn=document.querySelector("button");

// Task 1
// btn.onclick=()=>{
//         console.log("Clicked");
//     }

// task 2
let btns = document.querySelectorAll("button");
btns.forEach((btn)=>{
btn.onclick = () => {
  console.log("Button clicked!");
};
});

// task 3
for(btn of btns){
    btn.onmouseenter=()=>{
        console.log("Button hovered!");
    }
}