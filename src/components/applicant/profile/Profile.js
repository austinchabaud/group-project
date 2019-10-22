import React, { Component } from "react";
import axios from "axios";

export default class ApplicantProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {}
    };
  }

  componentDidMount() {
    axios.get("/api/applicantdata").then(res => {
      console.log(123456, res.data[0]);
      this.setState({ userData: res.data[0] });
    });
  }
  render() {
    return (
      <div className="applicantProfile">
        <div>{this.state.userData.email}</div>
        <div>{this.state.userData.phone}</div>
        <div>{this.state.userData.github}</div>
        <div>{this.state.userData.linkedin}</div>
        <div>{this.state.userData.city}</div>
        <div>{this.state.userData.state}</div>
        <div>{this.state.userData.portfolio}</div>
        <div>{this.state.userData.languages}</div>
      </div>
    );
  }
}
