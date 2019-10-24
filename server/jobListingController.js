module.exports = {
  getAllJobs: (req, res) => {
    const db = req.app.get("db");
    db.Employer.joblisting.allJobs().then(jobs => res.status(200).send(jobs));
  },
  addJob: (req, res) => {
    const db = req.app.get("db");
    console.log(req.body.date);
    const { title, city, state, description, languages, date_added } = req.body;
    const { name } = req.session.user;
    db.Employer.joblisting
      .addJob([title, name, city, state, description, languages, date_added])
      .then(jobs => res.status(200).send(jobs));
  },
  updateJob: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { name } = req.session.user;
    const { title, city, state, description, languages } = req.body;
    db.Employer.joblisting
      .updateJobs([id, title, city, state, description, languages, name])
      .then(jobs => res.status(200).send(jobs));
  },
  removeJob: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { name } = req.session.user;
    db.Employer.joblisting
      .deleteJob([id, name])
      .then(jobs => res.status(200).send(jobs));
  },
  getJobsByEmployer: (req, res) => {
    const db = req.app.get("db");
    const { name } = req.session.user;
    db.Employer.joblisting.get_jobs_by_employer(name).then(jobs => {
      console.log(jobs);
      res.status(200).send(jobs);
    });
  },
  getJobsByApplicant: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.session.user;
    db.Applicant.get_jobs_by_applicant(id)
      .then(jobs => res.status(200).send(jobs))
      .catch(err => {
        console.log(err);
      });
  },
  apply: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.session.user;
    const { job_id } = req.body;
    console.log(66666666, req.session.user.id);
    console.log(job_id, id);
    db.Applicant.applicant_apply([job_id, id]).then(jobs =>
      res.status(200).send(jobs)
    );
  }
};
