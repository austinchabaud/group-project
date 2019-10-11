import React, { Component } from "react";
import axios from "axios";

export default class JobListings extends Component {
	constructor() {
		super();
		this.state = {
			company: "",
			city: "",
			state: "",
			description: "",
			languages: ""
		};
	}
}
