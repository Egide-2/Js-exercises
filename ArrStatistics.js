const arr = [1,2,3,4,5]

const arrStat=()=>{
const sum = arr.reduce((a,b)=> a+b,0)
const min = Math.min(...arr)
const max = Math.max(...arr)
const average = sum/arr.length

return {sum,average,min,max}
}

console.log(arrStat())