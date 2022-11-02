const mongoose = require("mongoose");


// conect function connect to database
const connect = () => {
  mongoose.connect(
    process.env.DATABASE
  );
};

module.exports = connect;
