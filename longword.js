const word = ["hello" ,"hehjkljkml"," hi"]
 const length = word.map(num => num.length)
 const maxleength = Math.max(...length)
 const longWord = word.filter(word =>word.length === 10)
 console.log(longWord)