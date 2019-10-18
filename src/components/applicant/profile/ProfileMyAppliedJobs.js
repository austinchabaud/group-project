import React, { Component } from "react";
import axios from "axios";

export default class MyAppliedJobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appliedJobs: []
    };
  }

  componentDidMount() {
    console.log("hey there!");
    axios.get("/api/getMyAppliedJobs").then(res => {
      console.log(res);
      this.setState({ appliedJobs: res.data });
    });
  }
  render() {
    const displayAppliedJob = this.state.appliedJobs.map((appliedJob, i) => {
      return (
        <div key={i} className="myAppliedJobs">
          <div>{appliedJob.title}</div>
          <div>{appliedJob.company}</div>
          <div>{appliedJob.city}</div>
        </div>
      );
    });
    return (
      <div>
        <h3>{displayAppliedJob}</h3>
        <div>Applied Jobs</div>
      </div>
    );
  }
}
