const mongoose = require("mongoose")


const itemSchema = new mongoose.Schema({
    name: String,
    des: String
})


const itemtestModel = mongoose.model("itemtest", itemSchema)
module.exports = itemtestModel