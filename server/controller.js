module.exports = {
	getAllApplicants: (req, res) => {
		const db = req.app.get("db");
		db.Applicant.allUsers().then((job_seeker) =>
			res.status(200).send(job_seeker)
		);
	},
	addApplicants: (req, res) => {
		const db = req.app.get("db");
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
		db.Applicant.addApplicant([
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
		]).then((job_seeker) => res.status(200).send(job_seeker));
	},

	removeUser: (req, res) => {
		const db = req.app.get("db");
		const { id } = req.params;
		db.Applicant.remove_user(id).then((job_seeker) =>
			res.status(200).then(job_seeker)
		);
	},
	updateUsers: (req, res) => {
		const db = req.app.get("db");
		const { id } = req.params;
		const {
			name,
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
			name,
			phone,
			github,
			linkedin,
			city,
			state,
			portfolio,
			languages
		]).then((job_seeker) => res.status(200).send(job_seeker));
	},
	getAllEmployers: (req, res) => {
		const db = req.app.get("db");
		db.Employer.allEmployers().then((employer) =>
			res.status(200).send(employer)
		);
	},
	addEmployer: (req, res) => {
		const db = req.app.get("db");
		const {
			name,
			email,
			password,
			phone,
			linkedin,
			website,
			city,
			state
		} = req.body;
		db.Employer.add_employer([
			name,
			email,
			password,
			phone,
			linkedin,
			website,
			city,
			state
		]).then((employer) => res.status(200).send(employer));
	},
	updateEmployer: (req, res) => {
		const db = req.app.get("db");
		const { id } = req.params;
		const {
			name,
			email,
			password,
			phone,
			linkedin,
			website,
			city,
			state
		} = req.body;
		db.Employer.update_employer([
			id,
			name,
			email,
			password,
			phone,
			linkedin,
			website,
			city,
			state
		]).then((employer) => res.status(200).send(employer));
	},
	removeEmployer: (req, res) => {
		const db = req.app.get("db");
		const { id } = req.params;
		db.Employer.delete_employer(id).then((employer) =>
			res.status(200).then(employer)
		);
	}
};
