import "./App.css";
import Description from "components/Description";
import Footer from "components/Footer";
import Skills from "components/Skills";
import WorkExperience from "components/WorkExperience";
import Certifications from "components/Certifications";

function App() {
  return (
    <div className="App">
      <Description />
      <div>
        <WorkExperience />
      </div>
      <div>
        <Skills />
        <Certifications />
      </div>
      <Footer />
    </div>
  );
}

export default App;
