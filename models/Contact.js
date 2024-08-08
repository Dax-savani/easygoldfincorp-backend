const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    contact: {
      type: String,
    },
    country: {
      type: String,
    },
    pincode: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inquiry", inquirySchema);
