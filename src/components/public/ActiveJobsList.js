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
      languages: ""
    };
  }
  componentDidMount() {
    axios.get("/api/getAllJobs").then(res => {
      this.setState({ job: res.data });
    });
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
	constructor() {
		super();
		this.state = {
			job: [],
			company: "",
			city: "",
			state: "",
			description: "",
			languages: ""
		};
	}
	componentDidMount() {
		axios.get("/api/getAllJobs").then((res) => {
			console.log(res.data);
			this.setState({ job: res.data });
		});
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
			.then((res) => {
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
	removeJob = (id) => {
		axios
			.delete(`/api/removeJobs${id}`)
			.then((res) => this.setState({ job: res.data }));
	};
	updateJob = (id) => {
		axios
			.put(`/api/removeJobs/${id}`, {
				id: this.state.id,
				company: this.state.company,
				city: this.state.city,
				state: this.state.state,
				description: this.state.description,
				languages: this.state.languages
			})
			.then((res) => {
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

  render() {
    const displayJob = this.state.job.map((posting, i) => {
      return (
        <div key={i}>
          <div className="listings">
            {posting.company}
            <br />
            {posting.city}
            <br />
            {posting.state}
            <br />
            {posting.description}
            <br />
            {posting.languages}
          </div>
        </div>
      );
    });


		return (
			<div>
				<h1 className="list"> {displayJob}</h1>
			</div>
		);
	}
}
