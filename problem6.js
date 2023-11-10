function string(inventory){
let BMW=[];
let Audi=[];
for (let index = 0; index < 50; index++) {
    if(inventory[index].car_make=="BMW"){
        BMW.push(inventory[index]);
    }
    if(inventory[index].car_make=="Audi"){
        Audi.push(inventory[index])
    }
}
let wantedcars=BMW.concat(Audi)
// console.log(BMW)
// console.log(Audi)
// console.log(wantedcars)

console.log(JSON.stringify(wantedcars))
}
module.exports = {string};