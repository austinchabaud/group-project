import React from "react";
import JobListings from "./components/public/ActiveJobsList";
// import CreateJob from "./components/employer/Jobs/CreateJob";
import "./App.scss";
import { Route, Link, Switch, withRouter } from "react-router-dom";
import AuthApplicant from "./components/public/auth/Applicant/AuthApplicant";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">LOGO</div>
        <nav className="links">
          <ul>
            <li>
              <Link to="/applicantAccount">Apply for Jobs</Link>
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
      <Switch>
        <Route exact path="/" component={JobListings} />
        <Route path="/applicantAccount" component={AuthApplicant} />
      </Switch>

      {/* <CreateJob /> */}
    </div>
  );
}

export default App;
