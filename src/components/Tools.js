import React from "react";
import Heading from "./Heading";

import { toolsUsed as ToolsArr } from "resumeData";

function Tools() {
  return (
    <div className="Tools" data-aos="fade-left" data-aos-delay="2000">
      <Heading heading="Tools & Softwares" />
      <div className="Tools__container">
        {ToolsArr.map((el, idx) => (
          <span data-aos="fade-left" data-aos-delay={2000 + (idx + 1) * 100}>
            <Tool ToolName={el} key={idx} />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Tool(props) {
  return <div className="Tool__name">{props.ToolName}</div>;
}

export default Tools;
