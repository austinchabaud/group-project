import React, { Component } from "react";
import axios from "axios";
import "./activejobs.scss";

export default class JobListings extends Component {
  constructor() {
    super();
    this.state = {
      job: [],
      company: "",
      city: "",
      state: "",
      description: "",
      languages: "",
      search: ""
    };
  }
  componentDidMount() {
    axios.get("/api/getAllJobs").then(res => {
      this.setState({ job: res.data });
    });
  }
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  addJob = () => {
    axios
      .post("/api/addNewJobs", {
        company: this.state.company,
        city: this.state.city,
        state: this.state.state,
        description: this.state.description,
        languages: this.state.languages
      })
      .then(res => {
        this.setState({
          job: res.data,
          company: "",
          city: "",
          state: "",
          description: "",
          languages: ""
        });
      });
  };
  removeJob = id => {
    axios
      .delete(`/api/removeJobs${id}`)
      .then(res => this.setState({ job: res.data }));
  };
  updateJob = id => {
    axios
      .put(`/api/removeJobs/${id}`, {
        id: this.state.id,
        company: this.state.company,
        city: this.state.city,
        state: this.state.state,
        description: this.state.description,
        languages: this.state.languages
      })
      .then(res => {
        this.setState({
          job: res.data,
          company: "",
          city: "",
          state: "",
          description: "",
          languages: ""
        });
      });
  };

  applyClick = (job_id, title) => {
    job_id = +job_id;
    axios.post(`/api/apply`, { job_id }).then(res => {
      alert(`Congrats! Your application for ${title} is on its way!`);
    });
  };

  render() {
    const displayJob = this.state.job
      .filter(searching => {
        return (
          searching.languages
            .toLowerCase()
            .indexOf(this.state.search.toLowerCase()) !== -1
        );
      })
      .map((posting, i) => {
        return (
          <div key={i}>
            <div className="listings">
              <div className="company">{posting.company}</div>
              <div className="city-state">
                {posting.state}, {posting.city}
              </div>

              <br />
              <div className="description">{posting.description}</div>

              <div className="languages">
                Skills needed: {posting.languages}
              </div>
              <br />
              <div className="apply-box">
                <button className="apply-button">Apply</button>
              </div>
            </div>
          </div>
        );
      });

    return (
      <div>
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <h3 className="list"> {displayJob}</h3>
      </div>
    );
  }
}
