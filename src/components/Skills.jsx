import React from "react";
import Heading from "components/Heading";

import { Skills as SkillsArr } from "resumeData";

function Skills() {
  return (
    <div className="Skills">
      <Heading heading="Skills" />
      <div className="Skills__container">
        {SkillsArr.map((el, idx) => (
          <Skill skillName={el} key={idx} />
        ))}
      </div>
    </div>
  );
}

export function Skill(props) {
  return <div className="Skill__name">{props.skillName}</div>;
}

export default Skills;
