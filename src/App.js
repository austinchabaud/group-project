import React from "react";
import JobListings from "./components/public/ActiveJobsList";
import AuthApplicant from "./components/public/auth/Applicant/AuthApplicant";
import AuthEmployer from "./components/public/auth/Employer/AuthEmployer";
import CreateLogin from "./components/public/auth/CreateLogin";
import "./App.scss";
import { Route, Link, Switch } from "react-router-dom";

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
              <Link to="/createAccount">Create an Account!</Link>
            </li>
            <li>
              <Link to="/EmployerLogin">Employer</Link>
            </li>
            <li>
              <Link to="/ApplicantLogin">Applicant</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path="/" component={JobListings} />
        <Route path="/createAccount" component={CreateLogin} />
        <Route path="/EmployerLogin" component={AuthEmployer} />
        <Route path="/ApplicantLogin" component={AuthApplicant} />
      </Switch>
    </div>
  );
}

export default App;
