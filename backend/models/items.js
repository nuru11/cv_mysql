const mongoose = require("mongoose")


const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    passportimage: String
})


const itemModel = mongoose.model("item", itemSchema)
module.exports = itemModel