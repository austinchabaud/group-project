import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addJob } from "./components/employer/Jobs/CreateJob";

test("addJob", () => {
	let result = addJob();
	console.log(result);
	expect(result).toBe({
		title: "",
		company: "",
		city: "",
		state: "",
		description: "",
		languages: "",
		date_added: ""
	});
});
