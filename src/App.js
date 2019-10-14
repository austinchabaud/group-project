import React from "react";
import JobListings from "./components/public/ActiveJobsList";
// import AuthApplicant from "./components/public/auth/Applicant/AuthApplicant";
// import CreateJob from "./components/employer/Jobs/CreateJob";
import "./App.scss";
import { Route, Link, Switch, withRouter } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header>
				<div className="logo">LOGO</div>
				<nav className="links">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/applicantRegister">Apply for Jobs</Link>
						</li>
						<li>
							<Link to="/employerRegister">Post Jobs</Link>
						</li>
						<li>
							<Link to="/appProfile">Applicant Profile</Link>
						</li>
						<li>
							<Link to="/employerProfile">Employer Profile</Link>
						</li>
					</ul>
				</nav>
			</header>
			{/* <AuthApplicant /> */}
			<JobListings />
			{/* <CreateJob /> */}
		</div>
	);
}

export default App;
