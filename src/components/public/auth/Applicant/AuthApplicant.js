import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser } from "../../../../dux/reducer";
import { Redirect } from "react-router-dom";
import "./AuthApplicant.scss";
import axios from "axios";
class AuthApplicant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      username: "",
      register: true,
      name: "",
      phone: "",
      github: "",
      linkedin: "",
      city: "",
      state: "",
      portfolio: "",
      languages: ""
    };
  }

  async register() {
    const {
      username,
      email,
      password,
      name,
      phone,
      github,
      linkedin,
      city,
      state,
      portfolio,
      languages
    } = this.state;
    const registeredApplicant = await axios.post("/api/applicantregister", {
      username,
      email,
      password,
      name,
      phone,
      github,
      linkedin,
      city,
      state,
      portfolio,
      languages
    });
    this.props.setUser(registeredApplicant.data);
  }

  async login() {
    const { email, password } = this.state;
    const loggedInApplicant = await axios.post("/api/applicantlogin", {
      email,
      password
    });
    this.props.setUser(loggedInApplicant.data);
  }

  render() {
    const {
      email,
      username,
      password,
      register,
      name,
      phone,
      github,
      linkedin,
      city,
      state,
      portfolio,
      languages
    } = this.state;
    return (
      <div className="authAPP">
        <h3>Start Looking for Jobs Today!</h3>
        {this.props.user ? (
          <Redirect to="/" />
        ) : (
            <form
              className="appForm"
              onSubmit={e => {
                e.preventDefault();
                if (this.state.register) {
                  this.register();
                } else {
                  this.login();
                }
              }}
            >
              <input
                placeholder="Email"
                value={email}
                onChange={e =>
                  this.setState({
                    email: e.target.value
                  })
                }
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e =>
                  this.setState({
                    password: e.target.value
                  })
                }
              />
              {register && (
                <>
                  <input
                    placeholder="Username"
                    value={username}
                    onChange={e =>
                      this.setState({
                        username: e.target.value
                      })
                    }
                  />
                  <input
                    placeholder="Name"
                    value={name}
                    onChange={e =>
                      this.setState({
                        name: e.target.value
                      })
                    }
                  />
                  <input
                    placeholder="Phone"
                    value={phone}
                    onChange={e =>
                      this.setState({
                        phone: e.target.value
                      })
                    }
                  />
                  <input
                    placeholder="Github"
                    value={github}
                    onChange={e =>
                      this.setState({
                        github: e.target.value
                      })
                    }
                  />
                  <input
                    placeholder="Linkedin"
                    value={linkedin}
                    onChange={e =>
                      this.setState({
                        linkedin: e.target.value
                      })
                    }
                  />
                  <input
                    placeholder="City"
                    value={city}
                    onChange={e =>
                      this.setState({
                        city: e.target.value
                      })
                    }
                  />
                  <input
                    placeholder="State"
                    value={state}
                    onChange={e =>
                      this.setState({
                        state: e.target.value
                      })
                    }
                  />
                  <input
                    placeholder="Portfolio"
                    value={portfolio}
                    onChange={e =>
                      this.setState({
                        portfolio: e.target.value
                      })
                    }
                  />
                  <input
                    className="appLang"
                    placeholder="Languages"
                    value={languages}
                    onChange={e =>
                      this.setState({
                        languages: e.target.value
                      })
                    }
                  />
                </>
              )}
              <button>{register ? "Register" : "Login"}</button>
            </form>
          )}
        <div className="outerApp">
          <button
            onClick={() =>
              this.setState({
                register: true
              })
            }
          >
            Register
          </button>
          <h3>Already have an account ?</h3>
          <button
            onClick={() => {
              this.setState({
                register: false
              });
            }}
          >
            Login
          </button>
        </div>
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

const authEnhancingFunction = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default authEnhancingFunction(AuthApplicant);
