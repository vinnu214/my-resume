import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./App.css";
import Description from "components/Description";
import Footer from "components/Footer";
import Skills from "components/Skills";
import WorkExperience from "components/WorkExperience";
import Achievements from "components/Achievements";
import Education from "components/Education";
import Cerifications from "components/Cerifications";
import Hobbies from "components/Hobbies";
import Tools from "components/Tools";

function App() {
  useEffect(() => {
    AOS.init({ offset: 50, duration: 1000 });
  }, []);
  return (
    <React.Fragment>
      <div className="App">
        <Description />
        <div>
          <WorkExperience />
          <Cerifications />
          <Education />
        </div>
        <div>
          <Skills />
          <Tools />
          <Achievements />
          <Hobbies />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
