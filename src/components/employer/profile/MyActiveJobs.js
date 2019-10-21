import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class MyActiveJobs extends Component {
	componentDidMount() {
		axios.get("/api/getEmployerJobs").then((res) => {
			this.setState({ job: res.data });
		});
	}

	render() {
		return (
			<div>
				<span>{this.props.user.company}</span>
			</div>
		);
	}
}
function mappedStatetoProps(reduxState) {
	return reduxState;
}
const companyReduxConnection = connect(mappedStatetoProps);

export default companyReduxConnection(MyActiveJobs);
