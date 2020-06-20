const mongoose = require('mongoose')

const ProductSchema= mongoose.Schema(
  {
    name_product: {
      type: String,
      required: true
    },
    amount: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    date_add: {
      type: Date,
      default: Date.now
    }
  }
)

module.exports = mongoose.model('product', ProductSchema)