import React, { Component } from "react";
import axios from "axios";

export default class CreateJob extends Component {
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
			.delete(`/api/removeJobs/${id}`)
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
		const { company, city, state, description, languages } = this.state;
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
					<input
						placeholder="company"
						value={company}
						onChange={(e) => this.setState({ company: e.target.value })}
					/>
					<input
						placeholder="city"
						value={city}
						onChange={(e) => this.setState({ city: e.target.value })}
					/>
					<input
						placeholder="state"
						value={state}
						onChange={(e) => this.setState({ state: e.target.value })}
					/>
					<input
						placeholder="description"
						value={description}
						onChange={(e) => this.setState({ description: e.target.value })}
					/>
					<input
						placeholder="languages"
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
					placeholder="company"
					value={company}
					onChange={(e) => this.setState({ company: e.target.value })}
				/>
				<input
					placeholder="city"
					value={city}
					onChange={(e) => this.setState({ city: e.target.value })}
				/>
				<input
					placeholder="state"
					value={state}
					onChange={(e) => this.setState({ state: e.target.value })}
				/>
				<input
					placeholder="description"
					value={description}
					onChange={(e) => this.setState({ description: e.target.value })}
				/>
				<input
					placeholder="languages"
					value={languages}
					onChange={(e) => this.setState({ languages: e.target.value })}
				/>
				<button onClick={this.addJob}> Add a Job</button>
				<h1 className="list"> {displayJob}</h1>
			</div>
		);
	}
}
