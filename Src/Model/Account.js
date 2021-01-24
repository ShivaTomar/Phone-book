const mongoose = require('mongoose');

const Account_Schema = new mongoose.Schema({
  /*--full name of the user--*/
  FullName: {
    type: String,
    required: true,
  },

  /*--email of the user--*/
  Email: {
    type: String,
    required: true,
  },

  /*--jwt token--*/
  tokens: [{
    token: {
      type: String,
    }
  }]
})

const account = new mongoose.model('account', Account_Schema);
module.exports = account;