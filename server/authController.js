const bycrypt = require("bcrypt");
module.exports = {
  jobSeekerRegister: async (req, res) => {
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

    const foundSeeker = await db.find_applicant_email(email);

    if (foundSeeker.length) {
      res.status(400).send("Invalid User");
    } else {
      const saltRounds = 13;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = await db.addApplicant([
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
  }
};
