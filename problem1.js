const{inventory} = require("./data")
function car(carId){
for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id==carId) {
        return inventory[i];
    }
}
}
module.exports = {car};