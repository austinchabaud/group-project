const bycrypt = require("bcrypt");
module.exports = {
  applicantRegister: async (req, res) => {
    const {
      username,
      email,
      password,
      name,
      phone,
      github,
      linkedin,
      city,
      state,
      portfolio,
      languages
    } = req.body;
    const db = req.app.get("db");

    const foundUser = await db.Applicant.find_applicant_email(email);

    if (foundUser.length) {
      res.status(400).send("Invalid User");
    } else {
      const saltRounds = 13;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = await db.Applicant.addApplicant([
        email,
        hashedPassword,
        username,
        name,
        phone,
        github,
        linkedin,
        city,
        state,
        portfolio,
        languages
      ]);
      console.log(newUser);
      req.session.user = newUser[0];
      res.status(200).send(req.session.user);
    }
  },
  applicantLogin: async (req, res) => {
    const { email, password } = req.body;
    const db = req.app.get("db");
    const foundUser = await db.Applicant.find_applicant_email(email);
    console.log(foundUser);
    if (!foundUser.length) {
      res.status(404).send("user not registered");
    } else {
      const authenticated = await bcrypt.compare(
        password,
        foundUser[0].password
      );

      if (authenticated) {
        req.session.user = {
          id: foundUser[0].id,
          email: foundUser[0].email,
          username: foundUser[0].username
        };
        res.status(200).send(req.session.user);
      } else {
        res.status(401).send("invalid email/password");
      }
    }
  },
  applicantLogout: (req, res) => {
    req.session.destroy();
    res.status(200).send("later gamer");
  },
  getApplicantSession: (req, res) => {
    res.status(200).send(req.session.user);
  }
};