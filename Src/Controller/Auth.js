const Jwt = require("jsonwebtoken");

/*--Checks user Authentication using JWT Token--*/
const auth = (req, res, next) => {
  try {

    const token = req.cookies.jwt;
    Jwt.verify(token, process.env.SECRET_KEY, (error) => {
      if (error) {
        console.log("User is not logged in so, redirect to the login page");
        res.redirect("/PhoneBook/Account/login");
        return;
      }
      next();
    });

  } catch (error) {
    res.status(400).send(error);
  }
}

/*--Generates new Token for user login--*/
const createToken = async (user, _id) => {
  
  const token = Jwt.sign({ _id }, process.env.SECRET_KEY);
  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
}

module.exports = { auth, createToken };