import React from "react";
import JobListings from "./components/public/ActiveJobsList";
import AuthApplicant from "./components/public/auth/Applicant/AuthApplicant";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthApplicant />
      <JobListings />
    </div>
  );
}

export default App;
