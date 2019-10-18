module.exports = {
	getAllJobs: (req, res) => {
		const db = req.app.get("db");
		db.Employer.joblisting.allJobs().then((jobs) => res.status(200).send(jobs));
	},

	addJob: (req, res) => {
		const db = req.app.get("db");
		const { title, company, city, state, description, languages } = req.body;
		db.Employer.joblisting
			.addJob([title, company, city, state, description, languages])
			.then((jobs) => res.status(200).send(jobs));
	},
	updateJob: (req, res) => {
		const db = req.app.get("db");
		const { id } = req.params;
		const { title, company, city, state, description, languages } = req.body;
		db.Employer.joblisting
			.updateJobs([id, title, company, city, state, description, languages])
			.then((jobs) => res.status(200).send(jobs));
	},
	removeJob: (req, res) => {
		const db = req.app.get("db");
		const { id } = req.params;
		db.Employer.joblisting
			.deleteJob(id)
			.then((jobs) => res.status(200).send(jobs));
	},
	getJobsByEmployer: (req, res) => {
		const db = req.app.get("db");
		const { name } = req.session;
		db.Employer.joblisting
			.get_jobs_by_employer(name)
			.then((jobs) => res.status(200).send(jobs));
	},
	getJobsByApplicant: (req, res) => {
		const db = req.app.get("db");
		const { id } = req.session;
		db.Applicant.get_jobs_by_applicant(id).then((jobs) =>
			res.status(200).send(jobs)
		);
	},
	apply: (req, res) => {
		const db = req.app.get("db");
		const { id } = req.session.user;
		const { job_id } = req.body;
		console.log(req.session.user);
		db.Applicant.applicant_apply([job_id, id]).then((jobs) =>
			res.status(200).send(jobs)
		);
	}
};
