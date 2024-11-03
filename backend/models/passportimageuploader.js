const mongoose = require("mongoose");

const PassportImageScehma = new mongoose.Schema(
  {
   image:String
  },
  {
    collection: "PassportImage",
  }
);

mongoose.model("PassportImage", PassportImageScehma);




