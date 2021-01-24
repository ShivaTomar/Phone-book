const router = require("express").Router();
const account = require("../Model/Account");
const authController = require("./Auth");

/*--login DEMO USER--*/
router.get("/login", async (req, res) => {
  try {

    const _id = process.env.DEMOUSER_ID;
    const user = await account.findById(_id);
    const token = await authController.createToken(user, _id); //generate new jwt token on user login.

    //save token inside cookies for later User_Verifcation.
    res.cookie("jwt", token, {
      //set expiry time for token.
      expires: new Date(Date.now() + 600000),
      httpOnly: true
    })

    console.log("Login Successfull");
    res.status(200).redirect("/PhoneBook");
  } catch (error) {
    res.status(400).send(error);
  }
})

module.exports = router;
