const campany = {
   name: "PGEE",
   servise: undefined,
   address:null,
   direction:"kigali"


}

const newCompany =  Object.fromEntries(Object.entries(campany).map(([key, value]) => [key.toUpperCase(),value] ))


console.log(newCompany)