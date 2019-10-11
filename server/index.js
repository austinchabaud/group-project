require("dotenv").config();
const express = require("express");
const massive = require("massive");
const {
  registerApplicant,
  loginApplicant,
  noApplicant,
  getApplicantSession,
  registerEmployer,
  loginEmployer,
  noEmployer,
  getEmployerSession
} = require("./controller/authController.js");

const { CONNECTION_STRING, SESSION_SECRET } = process.env;
const app = express();
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1209600000
    }
  })
);

massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("data connected");
});

Applicant login, logout, register

app.post("/api/applicantregister", applicantRegister);
app.post("/api/applicantlogin", applicantLogin);
app.post("/api/applicantlogout", applicantLogout);
app.get("/api/applicantdata", getApplicantSession);

// Applicant profile, resume, saved jobs, applied jobs

app.get("/api/applicantProfile", getApplicantProfile);
app.put("/api/applicantProfile", updateApplicantProfile);
app.post("/api/applicantProfile", updateApplicantProfile);
app.get("/api/applicantResume", getApplicantResume);

Employer login, logout, register

app.post("/api/employerregister", employerRegister);
app.post("/api/employerlogin", employerLogin);
app.post("/api/employerlogout", employerLogout);
app.get("/api/employerdata", getEmployerSession);

Employer profile, posted jobs, post jobs

const PORT = 4000;
app.listen(PORT, () => console.log(`server listening on port: ${PORT}.`));
