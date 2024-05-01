const order= require("../Model/orderModel")

exports.placedOrder = async (req, res) => {
  try {
    
    return res.status(200).json(category);
  } catch (error) {
    console.log(error);
  }
};
