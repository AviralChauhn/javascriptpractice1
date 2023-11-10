function sortname(inventory){
let carname=[]
for (let index = 0; index < inventory.length; index++){
  carname.push(inventory[index].car_model)
  carname.sort()
}
console.log(carname)
}
module.exports = {sortname}