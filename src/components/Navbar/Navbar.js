import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { setUser } from "../../dux/reducer";
import { connect } from "react-redux";
import "./Navbar.scss";
import axios from "axios";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  toggleSideBar = () => {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  };
  render() {
    return (
      <header>
        <div className="container">
          <Link className="logo" to="/">
            <h4>
              HackerStaff
              <i className="fas fa-laptop-code" />
            </h4>
          </Link>
          <button onClick={this.toggleSideBar}>
            {this.state.toggle ? "X" : "Menu"}
          </button>
          <nav className={this.state.toggle ? "show" : ""}>
            <ul>
              <li>
                <a href="#/ApplicantLogin">Start Applying</a>
              </li>
              <li>
                <a href="#/ApplicantProfile">Your Profile</a>
              </li>
              <li>
                <a href="#/EmployerLogin">Post a Job</a>
              </li>
              <li>
                <a href="#/AppliedJobs">Applied Jobs</a>
              </li>
              <li>
                <button
                  className="logoutbutton"
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
              </li>
            </ul>
          </nav>
        </div>
      </header>
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
