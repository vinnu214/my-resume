import React from "react";
import Heading from "components/Heading";

import { Skills as SkillsArr } from "resumeData";

function Skills() {
  return (
    <div className="Skills" data-aos="fade-left">
      <Heading heading="Skills" />
      <div className="Skills__container">
        {SkillsArr.map((el, idx) => (
          <span data-aos="fade-left" data-aos-delay={300 + (idx + 1) * 100}>
            <Skill skillName={el} key={idx} />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skill(props) {
  return <p className="Skill__name">{props.skillName}</p>;
}

export default Skills;
