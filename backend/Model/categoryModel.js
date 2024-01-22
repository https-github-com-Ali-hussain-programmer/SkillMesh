const mongoose = require("mongoose");

const categorySchema= new mongoose.Schema({
  name: {
    
  },

});



module.exports = mongoose.model("Categories", categorySchema);