const bcrypt = require("bcrypt");
module.exports = {
  employerRegister: async (req, res) => {
    const { email, password, name, website, city, state } = req.body;
    const db = req.app.get("db");

    const foundUser = await db.Employer.find_employer_email(email);

    if (foundUser.length) {
      res.status(400).send("Invalid User");
    } else {
      const saltRounds = 13;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = await db.Employer.add_employer([
        email,
        hashedPassword,
        name,
        website,
        city,
        state
      ]).catch(err => console.log(err));
      console.log(newUser);
      req.session.user = newUser[0];
      res.status(200).send(req.session.user);
    }
  },
  employerLogin: async (req, res) => {
    const { email, password } = req.body;
    const db = req.app.get("db");
    const foundUser = await db.Employer.find_employer_email(email);
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
          name: foundUser[0].name
        };
        res.status(200).send(req.session.user);
      } else {
        res.status(401).send("invalid email/password");
      }
    }
  },
  employerLogout: (req, res) => {
    req.session.destroy();
    res.status(200).send("logged out");
  },
  getEmployerSession: (req, res) => {
    res.status(200).send(req.session.user);
  }
};
