function getcarage(arr){
let oldercars=[]
for (let index = 0; index < arr.length;index++) {
    if(arr[index]<2000){
        oldercars.push(arr[index])
    }
}
console.log(oldercars)
console.log(oldercars.length)
return oldercars;

}

module.exports ={getcarage}