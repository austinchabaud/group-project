import React, { Component } from "react";
import axios from "axios";

export default class MyActiveJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postedJobs: []
    };
  }
  componentDidMount() {
    axios.get("/api/getEmployerJobs").then(res => {
      this.setState({ postedJobs: res.data });
    });
  }

  render() {
    const displayPostedJob = this.state.postedJobs.map((postedJob, i) => {
      return (
        <div key={i} className="myPostedJobs">
          <div>{postedJob.name}</div>
        </div>
      );
    });
    return (
      <div className="postedJobs">
        <h2>Your Posted Jobs</h2>
        <p>A list of all the jobs you've previously posted.</p>
        <div className="job">{displayPostedJob}</div>
      </div>
    );
  }
}
