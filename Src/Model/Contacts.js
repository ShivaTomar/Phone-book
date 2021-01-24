const mongoose = require("mongoose");

const Contact_Schema = new mongoose.Schema({ 
  /*--Name of the contact--*/
  Name: {
    type: String,
    required: true
  },

  /*--Phone number of the contact--*/
  Phone_Number: {
    type: Number,
  },

  /*--Email address of the contact--*/
  Email: {
    type: String,
    required: true
  },
  
  /*The Date on which contact is created--*/
  Created: {
    type: Object,
  },
})

const contact = new mongoose.model("Contact", Contact_Schema);
module.exports = contact;
