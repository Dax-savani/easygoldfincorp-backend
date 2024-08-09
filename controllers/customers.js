const User = require("../models/User");
const Inquiry = require("../models/Contact");
const joi = require("joi");

const userSchema = joi.object({
  firstName: joi.string(),
  lastName: joi.string(),
  email: joi.string().email(),
  PhoneNo: joi.string(),
  country: joi.string(),
  pincode: joi.string(),
  State: joi.string(),
  city: joi.string(),
  address: joi.string(),
  service: joi.string(),
  message: joi.string(),
});

const inquirySchema = joi.object({
  name: joi.string(),
  email: joi.string().email(),
  contact: joi.string(),
  country: joi.string(),
  pincode: joi.string(),
  state: joi.string(),
  city: joi.string(),
});

const addCustomers = async (req, res) => {
  const customers = req.body;
  const { error, value } = userSchema.validate(customers);
  if (error) {
    return res.json(error.details[0].message);
  } else {
    const viewster = await User.create(value);
    return res.json(viewster);
  }
};

const allCustomers = async (req, res) => {
  const allviewster = await User.find({});
  return res.json(allviewster);
};

const addInquiry = async (req, res) => {
  const inquiry = req.body;
  const { error, value } = inquirySchema.validate(inquiry);
  if (error) {
    return res.json(error.details[0].message);
  } else {
    const inq = await Inquiry.create(value);
    return res.json(inq);
  }
};

const allInquiries = async (req, res) => {
  const inquiries = await Inquiry.find({});
  return res.json(inquiries);
};

module.exports = {
  allCustomers,
  addCustomers,
  addInquiry,
  allInquiries,
};
