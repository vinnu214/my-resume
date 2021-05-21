import "./App.css";
import Description from "components/Description";
import Footer from "components/Footer";
import Skills from "components/Skills";
import WorkExperience from "components/WorkExperience";
import Achievements from "components/Achievements";
import Education from "components/Education";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Description />
        <div>
          <WorkExperience />
          <Education />
        </div>
        <div>
          <Skills />
          <Achievements />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
