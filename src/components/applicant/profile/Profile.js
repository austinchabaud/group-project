import React, { Component } from "react";
import Axios from "axios";

export default class ApplicantProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Axios.get("/api/applicantdata").then(res => {
      alert(res);
    });
  }
  render() {
    return (
      <div>
        <h1>Applicant Profile</h1>
      </div>
    );
  }
}
