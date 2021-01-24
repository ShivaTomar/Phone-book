const router = require("express").Router();
const controller = require("../Controller/phoneBookController");
const authController = require("../Controller/Auth");
const Auth = authController.auth;

router.get("/", Auth, controller.Main);

router.post("/AddContact", Auth, controller.AddContact);

router.post("/EditContact", Auth, controller.UpdateContact);

router.post("/DeleteContact", Auth, controller.DeleteContact);

router.post("/DeleteAll", Auth, controller.DeleteAll);

router.get("/ContactDetails", Auth, controller.ContactDetails);

module.exports = router;