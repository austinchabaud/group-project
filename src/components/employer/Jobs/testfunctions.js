import axios from "axios";

export function addJob() {
	axios
		.post("/api/addNewJobs", {
			title: this.state.title,
			company: this.state.company,
			city: this.state.city,
			state: this.state.state,
			description: this.state.description,
			languages: this.state.languages,
			date_added: m.format("MMM Do YY")
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
}
