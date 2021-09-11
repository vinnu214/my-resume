import React from "react";
import Heading from "./Heading";

import { hobbies as HobbiesArr } from "resumeData";

function Hobbies() {
  return (
    <div>
      <div className="Hobbies" data-aos="fade-left">
        <Heading heading="Interests" />
        <div className="Hobbies__container">
          {HobbiesArr.map((el, idx) => (
            <span data-aos="fade-left" data-aos-delay={(idx + 1) * 100}>
              <Hobbie HobbieName={el} key={idx} />
            </span>
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
