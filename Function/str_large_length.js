str=["Russia","China","India"];

function largeStr(str) {
    country=str[0];
    for(i=0;i<str.length;i++){
        if(country.length<str[i].length){
            country=str[i];
        }
    }
    console.log(country);
}

largeStr(str);
  