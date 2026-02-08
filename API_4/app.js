const url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let ul = document.querySelector("ul");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    h1.innerHTML = `Colleges in <b>${country}</b>`;
    let clgArr = await getColleges(country);
    ClgList(clgArr);
});

function ClgList(clgArr) {
    ul.innerHTML = "";
    for (let col of clgArr) {
        let li = document.createElement("li");
        li.innerText = col.name;
        ul.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (err) {
        alert("error occurred");
        return [];
    }
}
