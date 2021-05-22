import React from "react";
import Heading from "./Heading";

import { toolsUsed as ToolsArr } from "resumeData";

function Tools() {
  return (
    <div className="Tools">
      <Heading heading="Tools & Softwares" />
      <div className="Tools__container">
        {ToolsArr.map((el, idx) => (
          <Tool ToolName={el} key={idx} />
        ))}
      </div>
    </div>
  );
}

export function Tool(props) {
  return <div className="Tool__name">{props.ToolName}</div>;
}

export default Tools;
