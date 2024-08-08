const mongoose = require("mongoose");

function dbcoection() {
  return mongoose.connect(process.env.MONGODB_CONACTION_NAME).then(() => {
    console.log("data base create successfully");
  });
}

module.exports = dbcoection;
