function getcarage(inventory, arr) {
    let oldercars = []
    let oldercarsname = []
    for (let i = 0; i < arr.length; i++) {
        if (inventory[i].car_year < 2000) {
            oldercarsname.push(inventory[i])
        }
    }
    console.log(oldercarsname)

    console.log(oldercarsname.length)
}

module.exports = { getcarage }