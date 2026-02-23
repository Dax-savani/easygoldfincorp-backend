const express = require("express");
const { addCustomers, allCustomers, addInquiry, allInquiries } = require("../controllers/customers");
const router = express.Router();
// test test test  
router.post("/newcustomers", addCustomers);
router.get("/allCustomers", allCustomers);
router.post("/inquiry", addInquiry);
router.get("/inquiry", allInquiries);

module.exports = router;
