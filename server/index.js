require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const {
	getAllJobs,
	addJob,
	updateJob,
	removeJob,
	getJobsByApplicant,
	getJobsByEmployer,
	apply
} = require("./jobListingController");
const {
	getAllApplicants,
	addApplicants,
	updateUsers,
	removeUser
} = require("./controller");

const {
	applicantRegister,
	applicantLogin,
	applicantLogout,
	updateApplicantProfile,
	getApplicantSession
} = require("./applicantController");

const {
	employerRegister,
	employerLogin,
	employerLogout,
	getEmployerSession
} = require("./employerController");

const { CONNECTION_STRING, SESSION_SECRET } = process.env;
const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/../build`));
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

massive(CONNECTION_STRING).then((dbInstance) => {
	app.set("db", dbInstance);
	console.log("data connected");
});

// Applicant login, logout, register

app.post("/api/applicantregister", applicantRegister);
app.post("/api/applicantlogin", applicantLogin);
app.post("/api/applicantlogout", applicantLogout);
app.get("/api/applicantdata", getApplicantSession);

// Applicant profile, resume, saved jobs, applied jobs

app.get("/api/applicantProfile", getAllApplicants);
app.put("/api/applicantProfile", addApplicants);
app.post("/api/applicantProfile", updateUsers);
app.delete("/api/applicantResume", removeUser);
app.post("/api/apply", apply);
app.put("/api/updateApplicantProfile/:id", updateApplicantProfile);

// Employer login, logout, register

app.post("/api/employerregister", employerRegister);
app.post("/api/employerlogin", employerLogin);
app.post("/api/employerlogout", employerLogout);
app.get("/api/employerdata", getEmployerSession);

// Employer profile, posted jobs, post jobs

// Job posting APIS
app.get("/api/getAllJobs", getAllJobs);
app.post("/api/addNewJobs", addJob);
app.put("/api/updateJobs/:id", updateJob);
app.delete("/api/removeJobs/:id", removeJob);
app.get("/api/getEmployerJobs", getJobsByEmployer);
app.get("/api/getMyAppliedJobs", getJobsByApplicant);

const PORT = 4000;
app.listen(PORT, () => console.log(`server listening on port: ${PORT}.`));

const path = require("path");
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../build/index.html"));
});
