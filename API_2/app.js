let url="https://dog.ceo/api/breeds/image/random";
let img=document.querySelector("img");
let btn=document.querySelector("button");

btn,addEventListener("click", async ()=>{
    let IMG=await getImage();
    img.src=IMG;

});

async function getImage(){
    try{
        let link=await axios.get(url);
        return link.data.message;

    }
    catch(e){
        console.log("error : "+e);
        img.alt="Image not found" ;

    }
} 