import React, { Component } from "react";
import axios from "axios";
import "./profileMyAppliedJobs.scss";

export default class MyAppliedJobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appliedJobs: []
    };
  }

  componentDidMount() {
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
      <div className="appliedJOBS">
        <h2>Your Applied Jobs</h2>
        <p>A list of all the jobs you've previously applied for.</p>
        <div className="job">{displayAppliedJob}</div>
      </div>
    );
  }
}
