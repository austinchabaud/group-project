import React from "react";
import JobListings from "./components/public/ActiveJobsList";
import AuthApplicant from "./components/public/auth/Applicant/AuthApplicant";
import CreateJob from "./components/employer/Jobs/CreateJob";
import "./App.css";

function App() {
	return (
		<div className="App">
			<AuthApplicant />
			<JobListings />
			{/* <CreateJob /> */}
		</div>
	);
}

export default App;
