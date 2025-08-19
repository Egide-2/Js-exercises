const products = [
    {name:"shoes",price:7000},
    {name:"phone",price:700},
     {name:"pc",price:900}
]

const sorted = products.map(p =>p.price).sort((a,b) => a-b)
console.log(sorted)