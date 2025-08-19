const products = [
    {name:"shoes",price:7000},
    {name:"phone",price:700},
     {name:"pc",price:900}
]

const sorted = products.sort((a,b)=> a.price - b.price)
console.log(sorted)