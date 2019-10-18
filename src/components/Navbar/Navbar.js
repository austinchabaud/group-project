import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { setUser } from "../../dux/reducer";
import { connect } from "react-redux";
import axios from "axios";
import "./Navbar.scss";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <Link to="/">
            <h4 className="logo">Website Logo</h4>
          </Link>
          <div className="button-container">
            <Link to="/ApplicantLogin">
              <button className="job-button">Start Applying</button>
            </Link>
            <Link to="/EmployerLogin">
              <button className="employer-button">Post a job</button>
            </Link>
            <Link to="/EmployerProfile">
              <button className="employer-profile">
                Employer Profile Page
              </button>
            </Link>

            <button
              onClick={() => {
                axios.post("/api/applicantlogout").then(res => {
                  alert("Logged out");
                  this.props.setUser(null);
                  this.props.history.push("/");
                });
              }}
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return reduxState;
}
const mapDispatchToProps = {
  setUser
};

const invokedConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default invokedConnect(withRouter(Navbar));
