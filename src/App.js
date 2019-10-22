import React from "react";
import JobListings from "./components/public/ActiveJobsList";
import AuthApplicant from "./components/public/auth/Applicant/AuthApplicant";
import AuthEmployer from "./components/public/auth/Employer/AuthEmployer";
import ProfileMyAppliedJobs from "./components/applicant/profile/ProfileMyAppliedJobs";
import Profile from "./components/applicant/profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import CompanyProfile from "./components/employer/profile/CompanyProfile";

import { Route, Switch } from "react-router-dom";

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
        <Route path="/AppliedJobs" component={ProfileMyAppliedJobs} />
        <Route path="/EmployerProfile" component={CompanyProfile} />
        <Route path="/ApplicantProfile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
