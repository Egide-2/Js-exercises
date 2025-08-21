const product = [
   {name: "PAGE1" ,price:700000},
   {name: "PAGE2" ,price:70000},
   {name: "PAGE3" ,price:7000},
]
// This is how to check if hte key exist in theobject

//  console.log(product[0].hasOwnProperty("name"))

//  console.log("name" in product[0])


//This is olso how to loop throuth thee object's keys

// for (let key in product ){
//     console.log( Object.keys(product[0]))
// }

// This is how to get the values of the keys



console.log(Object.entries(product[0]))

// The in heritance and prototype

const animal = {
    eat(){
        console.log(`${this.name} is eating ${this.food}`)
    }
}

const dog = Object.create(animal)
dog.name = "dog"
dog.food = "meat"
dog.eat()

// This is how to transform the objects

const materials = {
    phone: 99000,
    Age:78,
    price1 : 678,
}
const transformed = Object.keys(materials).map(k=>k.toUpperCase())
console.log(transformed)

const multiple = Object.keys(materials).map(
 key  =>{ return {[key] : materials[key]**2}}

)

console.log(multiple)

