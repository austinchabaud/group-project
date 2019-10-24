describe("My First Test", function() {
	it("visits the homepage", function() {
		cy.visit("http://localhost:4001/#/");
	});
});
describe("My First Test", function() {
	it("visits the applicant login", function() {
		cy.visit("http://localhost:4001/#/ApplicantLogin");
	});
});
describe("My First Test", function() {
	it("visits the employer login", function() {
		cy.visit("http://localhost:4001/#/EmployerLogin");
	});
});
describe("My First Test", function() {
	it("visits the applicant login", function() {
		cy.visit("http://localhost:4001/#/AppliedJobs");
	});
});
