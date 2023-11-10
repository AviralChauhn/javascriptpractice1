const{inventory} =require("../data");
const {age} = require("../problem4")
const getcaryear = age(inventory)
console.log(getcaryear)

module.exports = {getcaryear}