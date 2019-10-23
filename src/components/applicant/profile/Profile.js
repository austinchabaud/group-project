import React, { Component } from "react";
import axios from "axios";

export default class ApplicantProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      city: "",
      state: "",
      portfolio: "",
      languages: ""
    };
  }

  componentDidMount() {
    axios.get("/api/applicantdata").then(res => {
      let {
        id,
        email,
        phone,
        github,
        linkedin,
        city,
        state,
        portfolio,
        languages
      } = res.data[0];
      console.log(123456, res.data[0]);
      this.setState({
        id,
        email,
        phone,
        github,
        linkedin,
        city,
        state,
        portfolio,
        languages
      });
    });
  }

  updateApplicantProfile = id => {
    axios
      .put(`/api/updateApplicantProfile/${id}`, {
        id: this.state.id,
        email: this.state.email,
        phone: this.state.phone,
        github: this.state.github,
        linkedin: this.state.linkedin,
        city: this.state.city,
        state: this.state.state,
        portfolio: this.state.portfolio,
        languages: this.state.languages
      })
      .then(res => {
        let {
          id,
          email,
          phone,
          github,
          linkedin,
          city,
          state,
          portfolio,
          languages
        } = res.data[0];
        this.setState({
          id,
          email,
          phone,
          github,
          linkedin,
          city,
          state,
          portfolio,
          languages
        });
      });
  };

  render() {
    const {
      id,
      email,
      phone,
      github,
      linkedin,
      city,
      state,
      portfolio,
      languages
    } = this.state;

    return (
      <div>
        <div className="applicantProfile">
          {email}
          <br />
          {phone}
          <br />
          {github}
          <br />
          {linkedin}
          <br />
          {city}
          <br />
          {state}
          <br />
          {portfolio}
          <br />
          {languages}
        </div>

        <input
          placeholder="Email"
          value={email}
          onChange={e => this.setState({ email: e.target.value })}
        />
        <input
          placeholder="Phone Number"
          value={phone}
          onChange={e => this.setState({ phone: e.target.value })}
        />
        <input
          placeholder="Github"
          value={github}
          onChange={e => this.setState({ github: e.target.value })}
        />
        <input
          placeholder="Linkedin"
          value={linkedin}
          onChange={e => this.setState({ linkedin: e.target.value })}
        />
        <input
          placeholder="City"
          value={city}
          onChange={e => this.setState({ city: e.target.value })}
        />
        <input
          placeholder="State"
          value={state}
          onChange={e => this.setState({ state: e.target.value })}
        />
        <input
          placeholder="Portfolio"
          value={portfolio}
          onChange={e => this.setState({ portfolio: e.target.value })}
        />
        <input
          placeholder="Technical Languages"
          value={languages}
          onChange={e => this.setState({ languages: e.target.value })}
        />
        <button
          onClick={() => {
            this.updateApplicantProfile(id);
          }}
        >
          Update profile
        </button>
      </div>
    );
  }
}
