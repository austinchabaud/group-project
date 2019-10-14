import React from "react";
import Profile from "./components/applicant/profile/Profile";
import JobListings from "./components/public/ActiveJobsList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Profile />
      <JobListings />
    </div>
  );
}

export default App;
