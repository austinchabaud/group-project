import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser } from "../../../../dux/reducer";
import { Redirect } from "react-router-dom";
import axios from "axios";
class AuthEmployer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      username: "",
      register: true,
      name: "",
      phone: "",
      linkedin: "",
      website: "",
      city: "",
      state: ""
    };
  }

  async register() {
    const {
      email,
      password,
      name,
      phone,
      linkedin,
      website,
      city,
      state
    } = this.state;
    const registeredEmployer = await axios.post("/api/employerregister", {
      email,
      password,
      name,
      phone,
      linkedin,
      website,
      city,
      state
    });
    this.props.setUser(registeredEmployer.data);
  }

  async login() {
    const { email, password } = this.state;
    const loggedInEmployer = await axios.post("/api/employerlogin", {
      email,
      password
    });
    this.props.setUser(loggedInEmployer.data);
  }

  render() {
    const {
      email,
      password,
      register,
      name,
      phone,
      linkedin,
      website,
      city,
      state
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
                  placeholder="linkedin"
                  value={linkedin}
                  onChange={e =>
                    this.setState({
                      linkedin: e.target.value
                    })
                  }
                />
                <input
                  placeholder="website"
                  value={website}
                  onChange={e =>
                    this.setState({
                      website: e.target.value
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

export default authEnhancingFunction(AuthEmployer);
