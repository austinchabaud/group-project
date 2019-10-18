import React from "react";
import JobListings from "./components/public/ActiveJobsList";
import AuthApplicant from "./components/public/auth/Applicant/AuthApplicant";
import AuthEmployer from "./components/public/auth/Employer/AuthEmployer";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import CompanyProfile from "./components/employer/profile/CompanyProfile";

function App() {
	return (
		<div className="App">
			<header>
				<Navbar />
			</header>

			<Switch>
				<Route exact path="/" component={JobListings} />
				<Route path="/EmployerLogin" component={AuthEmployer} />
				<Route path="/ApplicantLogin" component={AuthApplicant} />
				<Route path="/EmployerProfile" component={CompanyProfile} />
			</Switch>
		</div>
	);
}

export default App;
