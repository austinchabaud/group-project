import React from "react";
import "./createLogin.scss";
import { Route, Link, Switch } from "react-router-dom";

export default function CreateLogin() {
	return (
		<div className="background">
			<body>
				<div>
					<ul className="login">
						<li>
							<Link to="/EmployerLogin">Employer</Link>
							<br />
							<img
								className="image"
								src="https://www.prideimmigration.com/wp-content/uploads/2016/01/h1b-visa-employer-checklist.jpg"
							/>
						</li>
						<li>
							<Link to="/ApplicantLogin">Job-Seeker</Link>
							<br />
							<img
								className="image"
								src="https://au.hudson.com/images/default-source/insights/resumes/how_to_write_a_resume_banner.png?sfvrsn=e866e5f5_4"
							/>
						</li>
					</ul>
				</div>

				<Switch></Switch>
			</body>
		</div>
	);
}
