const mongoose = require("mongoose");
const {
  customerTable,
  customerCardIDTable,
} = require("../model/customerModel");

module.exports = {
  createCustomer: function (req, res) {
    try {
      customerTable(req.body.data).save(function (err, result) {
        if (err) {
          res.send(err);
        }
        const customerId = result._id.toString();
        customerCardIDTable({
          cardId: customerId.substring(0, 10).toUpperCase(),
          customer: customerId,
        }).save();
        res.send(result);
      });
    } catch (err) {
      console.log("err", err);
    }
  },
  showCardDetailWithCustomer: async function (req, res) {
    try {
      // If you don’t want to get customer._id & customer.__v in the result, just add second
      //    ----------------------------------------------------
      // parameters to populate() function like this:
      let cardDetails = await customerCardIDTable
        .find()
        .populate("customer", "-_id -__v");
      res.send(cardDetails);
    } catch (err) {
      res.send(err);
    }
  },
};
