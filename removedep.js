// const arr1 =[1,2,3,4,5,5,6,6,7,8,]
// const arr2 = []
//  for( let i = 0; i<arr1.length; i++){
// if(!arr2.includes(arr1[i])){
//     arr2.push(arr1[i])
// }
//  }

// console.log(arr2)


let y =[]
for(let i = 0; i<9 ;i++){
if(i % 2 === 0){
  y.push(i)
}
}

let sum = y.reduce((v,r)=> v+r, 0)
 console.log(sum)