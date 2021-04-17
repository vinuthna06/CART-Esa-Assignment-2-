'use strict';
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;


// var TaskSchema = new Schema({
//   name: {
//     type: String,
//     required: 'Kindly enter the name of the task'
//   },
//   Created_date: {
//     type: Date,
//     default: Date.now
//   },
//   status: {
//     type: [{
//       type: String,
//       enum: ['pending', 'ongoing', 'completed']
//     }],
//     default: ['pending']
//   }
// });

var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var ProductSchema = new Schema({
    
    productId: {
      type: String,
      required: 'Kindly enter the product-id'
    },
    category: {
        type: String,
        required: 'Kindly enter category of product'
      },
    productName: {
    type: String,
    required: 'Kindly enter the name of the product'
    },
    productModel: {
        type: String,
        required: 'Kindly enter the model of the product'
      },
    price: {
    type: Number,
    required: 'Kindly enter the price of the model'
    },
    availableQuantity: {
        type: Number,
        required: 'Kindly enter the available quantity'
      },
    
  });

  // ProductSchema.method('transform',function(){
  //   var obj=this.toObject()
  //   obj.productId=obj._id
  //   delete obj._id
  //   return obj
  // })




//module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model('Products', ProductSchema);

