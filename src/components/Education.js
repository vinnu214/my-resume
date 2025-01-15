import React from "react";
import Heading from "./Heading";
import { edDtls as EducationDtls } from "resumeData";

function Education() {
  return (
    <div data-aos="fade-right">
      <Heading heading="Education" />
      <ul className="Education__Container pl-7">
        {EducationDtls.map((el, idx) => (
          <li key={idx} className="Education__mainli list" data-aos="fade-left">
            <p className="Education__degree">{el.degreeName}</p>
            <p className="Education__institute">
              <span>
                {el.instituteName}
              </span>
            </p>
            <br />
            <p className="Education__specialization">
              <span>{el.specialisation}</span>
            </p>
            <div className="Education__duration">
              <p>{el.fromDate + " - " + (el.toDate ? el.toDate : "present")}</p>
              <span className="Education__location">{el.location}</span>
            </div>
            {/* {el.specialisation ? (
              <ul className="pl-5 respList">
                <li className="Education__li">
                  <p className="Education__specialisation">
                    {el.specialisation}
                  </p>
                </li>
              </ul>
            ) : null} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
