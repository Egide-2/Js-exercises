let y =[]
for(let i = 0; i<9 ;i++){
if(i % 2 === 0){
  y.push(i)
}
}

let sum = y.reduce((v,r)=> v+r, 0)
 console.log(sum)