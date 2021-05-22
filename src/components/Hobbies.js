import React from "react";
import Heading from "./Heading";

import { hobbies as HobbiesArr } from "resumeData";

function Hobbies() {
  return (
    <div>
      <div className="Hobbies">
        <Heading heading="Interests" />
        <div className="Hobbies__container">
          {HobbiesArr.map((el, idx) => (
            <Hobbie HobbieName={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hobbie(props) {
  return <div className="Hobbie__name">{props.HobbieName}</div>;
}

export default Hobbies;
