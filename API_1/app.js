let url="https://catfact.ninja/fact";
let btn=document.querySelector("button");
let p=document.querySelector("p");

btn.addEventListener("click",async () =>{
    let fact= await getFacts();
    p.innerText=fact;
})

async function getFacts(){
    try{
        let res=await axios.get(url);
        return res.data.fact ;
    }
    catch(e){
        console.log("error : "+e);
        return "Fact not found" ;
    }
}
getFacts();




// async function getFacts(){
//     try{
//         let res=await fetch(url);
//         let data=await res.json();
//         console.log(data.fact);

//         let res2=await fetch(url);
//         let data2=await res2.json();
//         console.log(data2.fact);

//         let res3=await fetch(url);
//         let data3=await res3.json();
//         console.log(data3.fact);
//     }
//     catch(e){
//         console.log("error :",e);
//     }
// }
// getFacts();

