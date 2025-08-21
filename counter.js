const createCount = ()=>{

    let counter = 0

     return function counterFn(){
        counter += 1;
        return counter
    };

    

}

let counter = createCount()

console.log(counter())