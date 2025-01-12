import React from "react";
import Heading from "components/Heading";

import { WorkExperiences as WEArr } from "resumeData";
function WorkExperience() {
  return (
    <div className="WE text" data-aos="fade-right">
      <Heading heading="Professional Experience" />
      <ul className="pl-7  WE__style-ul">
        {WEArr.map((el, bINd) => {
          return (
            <li key={bINd} className="WE__style-mainli list">
              <p
                className="WE__style-designation"
                data-aos="fade-right"
                data-aos-delay={((bINd + 1) * 200).toString()}
              >
                {el.designation}
              </p>
              <p
                className="WE__style-company"
                data-aos="fade-right"
                data-aos-delay={((bINd + 1) * 300).toString()}
              >
                {el.company}
              </p>
              <div
                className="WE__style-duration"
                data-aos="fade-right"
                data-aos-delay={((bINd + 1) * 400).toString()}
              >
                <p>
                  {el.startDate + " - " + (el.endDate ? el.endDate : "present")}
                </p>
                <p className="WE__style-location">{el.location}</p>
              </div>
              <ul className="pl-2 respList">
                {el.rolesandResp.map((resEl, ind) => {
                  return (
                    <li
                      className="WE__style-li"
                      key={ind}
                      data-aos="fade-right"
                      data-aos-delay={(400 + (ind + 1) * 100).toString()}
                    >
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
