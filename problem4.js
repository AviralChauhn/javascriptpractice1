
function age(inventory){
let years=[]
for (let index = 0; index < inventory.length; index++) {
    years.push(inventory[index].car_year)
}
return years
}
module.exports = {age}