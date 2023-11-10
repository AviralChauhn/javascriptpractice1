const {inventory} = require("./data")
function lastcar(carat){
for (let index = 0; index < 50; index++) {
    if(inventory[index].id==carat){
        return inventory[index]
    }
    
}
}
module.exports ={lastcar}