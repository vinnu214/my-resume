import React from "react";
import Heading from "components/Heading";

import { WorkExperiences as WEArr } from "resumeData";
function WorkExperience() {
  return (
    <div className="WE text">
      <Heading heading="Work Experience" />
      <ul className="pl-7  WE__style-ul">
        {WEArr.map((el, bINd) => {
          return (
            <li key={bINd} className="WE__style-mainli list">
              <p className="WE__style-designation">{el.designation}</p>
              <p className="WE__style-company">{el.company}</p>
              <div className="WE__style-duration">
                <p>
                  {el.startDate + " - " + (el.endDate ? el.endDate : "present")}
                </p>
                <p className="WE__style-location">{el.location}</p>
              </div>
              <ul className="pl-2 respList">
                {el.rolesandResp.map((resEl, ind) => {
                  return (
                    <li className="WE__style-li" key={ind}>
                      <p className="WE__style-span">{resEl}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default WorkExperience;
