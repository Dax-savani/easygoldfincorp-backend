const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    PhoneNo: {
      type: String,
    },
    country: {
      type: String,
    },
    pincode: {
      type: String,
    },
    State: {
      type: String,
    },
    city: {
      type: String,
    },
    address: {
      type: String,
    },
    service: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("customersdata", user);
