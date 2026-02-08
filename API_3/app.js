const url="https://icanhazdadjoke.com/";
let btn=document.querySelector("button");
let p=document.querySelector("p");

btn.addEventListener("click",async function(){
    p.innerText=await getJokes();
});

async function getJokes(){
    try{
        const config={headers:{Accept:"application/json"}};
        let joke=await axios.get(url,config);
        console.log(joke.data.joke);
        return joke.data.joke;
    }
    catch(err){
        alert("error occurred");
        return "error!";
    }
}