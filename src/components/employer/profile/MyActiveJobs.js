import React, { Component } from "react";
import Axios from "axios";

export default class MyActiveJobs extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios.get("/api/getEmployerJobs").then(res => {
      this.setState({ job: res.data });
    });
  }

  render() {
    return (
      <div>
        <span>Your Active Jobs List</span>
      </div>
    );
  }
}
