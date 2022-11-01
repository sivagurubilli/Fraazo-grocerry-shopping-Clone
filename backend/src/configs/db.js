const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(
    process.env.DATABASE
  );
};

module.exports = connect;
