import React, { Component } from "react";
import axios from "axios";

export default class CreateJob extends Component {
	constructor() {
		super();
		this.state = {
			job: [],
			title: "",
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
			this.setState({
				job: res.data
			});
		});
	}
	addJob = () => {
		axios
			.post("/api/addNewJobs", {
				title: this.state.title,
				company: this.state.company,
				city: this.state.city,
				state: this.state.state,
				description: this.state.description,
				languages: this.state.languages
			})
			.then((res) => {
				this.setState({
					job: res.data,
					title: "",
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
			.delete(`/api/removeJobs/${id}`)
			.then((res) => this.setState({ job: res.data }));
	};

	updateJob = (id) => {
		axios
			.put(`/api/updateJobs/${id}`, {
				id: this.state.id,
				title: this.state.title,
				company: this.state.company,
				city: this.state.city,
				state: this.state.state,
				description: this.state.description,
				languages: this.state.languages
			})
			.then((res) => {
				this.setState({
					job: res.data,
					title: "",
					company: "",
					city: "",
					state: "",
					description: "",
					languages: ""
				});
			});
	};
	render() {
		const { company, city, state, description, languages, title } = this.state;
		const displayJob = this.state.job.map((posting, i) => {
			return (
				<div key={i}>
					<div className="listings">
						{posting.title}
						<br />
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
					<input
						placeholder="Title"
						value={title}
						onChange={(e) => this.setState({ title: e.target.value })}
					/>
					<input
						placeholder="Company"
						value={company}
						onChange={(e) => this.setState({ company: e.target.value })}
					/>
					<input
						placeholder="City"
						value={city}
						onChange={(e) => this.setState({ city: e.target.value })}
					/>
					<input
						placeholder="State"
						value={state}
						onChange={(e) => this.setState({ state: e.target.value })}
					/>
					<input
						placeholder="Description"
						value={description}
						onChange={(e) => this.setState({ description: e.target.value })}
					/>
					<input
						placeholder="Languages"
						value={languages}
						onChange={(e) => this.setState({ languages: e.target.value })}
					/>
					<button
						onClick={() => {
							this.updateJob(posting.id);
						}}
					>
						Update Job
					</button>
					<button
						onClick={() => {
							this.removeJob(posting.id);
						}}
					>
						Filled
					</button>
				</div>
			);
		});

		return (
			<div>
				<input
					placeholder="Title"
					value={title}
					onChange={(e) => this.setState({ title: e.target.value })}
				/>
				<input
					placeholder="Company"
					value={company}
					onChange={(e) => this.setState({ company: e.target.value })}
				/>
				<input
					placeholder="City"
					value={city}
					onChange={(e) => this.setState({ city: e.target.value })}
				/>
				<input
					placeholder="State"
					value={state}
					onChange={(e) => this.setState({ state: e.target.value })}
				/>
				<input
					placeholder="Description"
					value={description}
					onChange={(e) => this.setState({ description: e.target.value })}
				/>
				<input
					placeholder="Languages"
					value={languages}
					onChange={(e) => this.setState({ languages: e.target.value })}
				/>
				<button onClick={this.addJob}> Add a Job</button>
				<h1 className="list"> {displayJob}</h1>
			</div>
		);
	}
}
