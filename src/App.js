import React from "react";
import JobListings from "./components/public/ActiveJobsList";
import AuthApplicant from "./components/public/auth/Applicant/AuthApplicant";
import AuthEmployer from "./components/public/auth/Employer/AuthEmployer";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import { Route, Link, Switch } from "react-router-dom";
import MyAppliedJobs from "./components/applicant/profile/ProfileMyAppliedJobs";

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
              <Link to="/createAccount">Create an Account</Link>
            </li>
            <li>
              <Link to="/ProfileMyAppliedJobs">Applied Jobs</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path="/" component={JobListings} />
        <Route path="/EmployerLogin" component={AuthEmployer} />
        <Route path="/ApplicantLogin" component={AuthApplicant} />
        <Route path="/ProfileMyAppliedJobs" component={MyAppliedJobs} />
      </Switch>
    </div>
  );
}

export default App;
