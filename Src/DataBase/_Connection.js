const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/PhoneBook", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log("connection is established");
}).catch((e) => {
  console.log(`some error occurd: ${e.message}`);
});
