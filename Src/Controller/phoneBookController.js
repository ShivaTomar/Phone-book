const contactModel = require("../Model/Contacts");
const moment = require("moment");

/*--renders the Main page of the application--*/
exports.Main = async (req, res, next) => {
  try {

    const Contacts = await contactModel.find();
    res.status(200).render("./Main", { Contacts, Count: Contacts.length });

  } catch (error) {
    console.log(error.message);
    res.status(400).send(error);
  }
}

/*--Adds a new contact in the phonebook.--*/
exports.AddContact = async (req, res) => {
  try {

    const now = moment();
    const NewContact = req.body;
    NewContact.Created = getDate(now)

    const contact = new contactModel(NewContact);
    await contact.save();
    res.status(200).redirect("/PhoneBook");

  } catch (error) { res.status(400).send(error); }
}

/*--Deletes a contact on request.--*/
exports.DeleteContact = async (req, res) => {
  try {

    const contactId = req.body.Id;
    await contactModel.findByIdAndDelete({ "_id": contactId });
    const contacts = await contactModel.find().count();
    var result = { success: true, contacts }
    res.status(200).send(result);

  } catch (error) {
    res.status(400).send({ success: true });
  }
}

/*--Deletes all existing contacts from phonebook.--*/
exports.DeleteAll = async (req, res) => {
  try {

    await contactModel.deleteMany();
    res.status(200).send(true);
  } catch (error) { res.status(400).send(error); };
}

/*--Modifies the existing contact info--*/
exports.UpdateContact = async (req, res) => {
  try {

    const contactId = req.body.contactId;
    const updates = req.body;
    await contactModel.findByIdAndUpdate(contactId, updates);
    res.status(200).send(req.body);
  } catch (error) { res.status(400).send(error); }
};

/*--returns all contact details--*/
exports.ContactDetails = async (req, res) => {
  try {
    const Contacts = await contactModel.find();
    res.status(200).render("./Partials/_ContactsTable", { Contacts, Count: Contacts.length });

  } catch (error) { res.status(400).send(error); }
}

/*--returns data & time of current moment--*/
function getDate(now) {
  let date = now.format("dddd, MMMM Do YYYY"), time = now.format("h:mm a");
  return { date, time };
}