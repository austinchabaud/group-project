import React, { Component } from "react";
import axios from "axios";
import "./activejobs.scss";
import moment from "moment";

const m = moment();

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
			title: "",
			date_added: m.format("MMM Do YY"),
			search: ""
		};
	}
	componentDidMount() {
		axios.get("/api/getAllJobs").then((res) => {
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
				languages: this.state.languages,
				title: this.state.title,
				date_added: m.format("MMM Do YY")
			})
			.then((res) => {
				this.setState({
					job: res.data,
					company: "",
					city: "",
					state: "",
					description: "",
					languages: "",
					date_added: m.format("MMM Do YY")
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


	applyClick = (job_id, title) => {
		axios.post(`/api/apply`, { job_id }).then((res) => {
			alert(`Congrats! Your application for ${title} is on its way!`);
		});
	};
	render() {
		const displayJob = this.state.job
			.filter((searching) => {
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
							<div className="jobtitle">{posting.title}</div>
							<div className="company">{posting.company}</div>
							<div className="date_added">{posting.date_added}</div>
							<div className="city-state">
								<i className="fas fa-map-marker-alt" />
								{posting.city}, {posting.state}
							</div>

							<div className="description">{posting.description}</div>

							<div className="languages">
								Skills needed: {posting.languages}
							</div>

							<button
								className="apply-button"
								onClick={() => {
									this.applyClick(posting.id, posting.title);
								}}
							>
								apply
							</button>
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
