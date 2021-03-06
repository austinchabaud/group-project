const bcrypt = require("bcrypt");
module.exports = {
  applicantRegister: async (req, res) => {
    console.log(req.body);
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
    console.log(foundUser);
    if (foundUser.length) {
      res.status(400).send("Invalid User");
    } else {
      const saltRounds = 12;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = await db.Applicant.addApplicant([
        username,
        email,
        hashedPassword,
        name,
        phone,
        github,
        linkedin,
        city,
        state,
        portfolio,
        languages
      ]).catch(err => console.log(err));
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
        console.log(4444444, req.session);
        res.status(200).send(req.session.user);
      } else {
        res.status(401).send("invalid email/password");
      }
    }
  },
  updateApplicantProfile: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const {
      email,
      phone,
      github,
      linkedin,
      city,
      state,
      portfolio,
      languages
    } = req.body;
    db.Applicant.updateUser([
      id,
      email,
      phone,
      github,
      linkedin,
      city,
      state,
      portfolio,
      languages
    ]).then(jobs => res.status(200).send(jobs));
  },
  applicantLogout: (req, res) => {
    req.session.destroy();
    res.status(200).send("logged out");
  },
  getApplicantSession: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.session.user;
    console.log("user id", id);
    let userInfo = await db.Applicant.applicantData(id);
    // console.log(userInfo);
    res.status(200).send(userInfo);
  }
};
