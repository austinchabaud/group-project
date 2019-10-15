module.exports = {
  getAllJobs: (req, res) => {
    const db = req.app.get("db");
    db.Employer.joblisting.allJobs().then(jobs => res.status(200).send(jobs));
  },
  addJob: (req, res) => {
    const db = req.app.get("db");
    const { company, city, state, description, languages } = req.body;
    db.Employer.joblisting
      .addJob([company, city, state, description, languages])
      .then(jobs => res.status(200).send(jobs));
  },
  updateJob: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { company, city, state, description, languages } = req.body;
    db.Employer.joblisting
      .updateJobs([id, company, city, state, description, languages])
      .then(jobs => res.status(200).send(jobs));
  },
  removeJob: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.Employer.joblisting
      .deleteJob(id)
      .then(jobs => res.status(200).send(jobs));
  },
  getJobsByEmployer: (req, res) => {
    const db = req.app.get("db");
    const { name } = req.session;
    db.employer.joblisting
      .get_jobs_by_employer(name)
      .then(jobs => res.status(200).send(jobs));
  }
};
