import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser } from "../../../../dux/reducer";
import { Redirect } from "react-router-dom";
import "./AuthApplicant.css";
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
      <div className="auth">
        {this.props.user ? (
          <Redirect to="/" />
        ) : (
          <form
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
              placeholder="email"
              value={email}
              onChange={e =>
                this.setState({
                  email: e.target.value
                })
              }
            />
            <input
              placeholder="password"
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
                  placeholder="username"
                  value={username}
                  onChange={e =>
                    this.setState({
                      username: e.target.value
                    })
                  }
                />
                <input
                  placeholder="name"
                  value={name}
                  onChange={e =>
                    this.setState({
                      name: e.target.value
                    })
                  }
                />
                <input
                  placeholder="phone"
                  value={phone}
                  onChange={e =>
                    this.setState({
                      phone: e.target.value
                    })
                  }
                />
                <input
                  placeholder="github"
                  value={github}
                  onChange={e =>
                    this.setState({
                      github: e.target.value
                    })
                  }
                />
                <input
                  placeholder="linkedin"
                  value={linkedin}
                  onChange={e =>
                    this.setState({
                      linkedin: e.target.value
                    })
                  }
                />
                <input
                  placeholder="city"
                  value={city}
                  onChange={e =>
                    this.setState({
                      city: e.target.value
                    })
                  }
                />
                <input
                  placeholder="state"
                  value={state}
                  onChange={e =>
                    this.setState({
                      state: e.target.value
                    })
                  }
                />
                <input
                  placeholder="portfolio"
                  value={portfolio}
                  onChange={e =>
                    this.setState({
                      portfolio: e.target.value
                    })
                  }
                />
                <input
                  placeholder="languages"
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
        <div>
          <button
            onClick={() =>
              this.setState({
                register: true
              })
            }
          >
            Register
          </button>
          Already have an account ?
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
