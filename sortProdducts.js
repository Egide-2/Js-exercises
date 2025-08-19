const campany = {
   name: "PGEE",
   servise: undefined,
   address:null,
   direction:"kigali"


}

for (let key in campany){
    if(campany[key] === null ){  campany[key] =   0 }
    else if(campany[key] === undefined){ campany[key] = ""}
}

console.log(campany)