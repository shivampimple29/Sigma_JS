console.log(..."Shivam");

let arr=[1,2,3,4,5];
let newarr=[...arr];
console.log(newarr);


let data={
    email:"shivam@gmail.com",
    pass:"abcd",
};

const dataCopy={...data,id:123,Country:'India'};
let a=[1,2,3,4,5];
let obj1={...a};
let obj2={..."hello"};

console.log(obj1);
console.log(obj2);