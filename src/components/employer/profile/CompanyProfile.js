import React, { Component } from "react";
import Axios from "axios";

export default class CompanyProfile extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    Axios.get("/api/employerdata").then(res => {
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <span>Your Company Profile</span>
      </div>
    );
  }
}
