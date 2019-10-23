import React, { Component } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import CreateJob from "../Jobs/CreateJob";
import MyActiveJobs from "./MyActiveJobs";

export default class CompanyProfile extends Component {
  componentDidMount() {
    axios.get("/api/getEmployerJobs").then(res => {
      this.setState({ job: res.data });
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/EmployerProfile" component={CreateJob} />
          <Route path="/api/getEmployerJobs" component={MyActiveJobs} />
        </Switch>
      </div>
    );
  }
}
