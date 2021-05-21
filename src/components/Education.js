import React from "react";
import Heading from "./Heading";
import { edDtls as EducationDtls } from "resumeData";

function Education() {
  return (
    <div>
      <React.Fragment>
        <Heading heading="Education" />
        <ul className="Education__Container pl-7">
          {EducationDtls.map((el, idx) => (
            <li key={idx} className="Education__mainli list ">
              <p className="Education__degree">{el.degreeName}</p>
              <p className="Education__institute">
                {el.instituteName + " - " + el.location}
              </p>
              <div className="Education__duration ">
                <p>
                  {el.fromDate + " - " + (el.toDate ? el.toDate : "present")}
                </p>
                <p className="Education__Score">
                  {el.isGPA
                    ? el.score
                      ? "CGPA - " + el.score
                      : ""
                    : el.score
                    ? el.score + "%"
                    : ""}
                </p>
              </div>
              {el.specialisation ? (
                <ul className="pl-5 respList">
                  <li className="Education__li">
                    <p className="Education__specialisation">
                      {el.specialisation}
                    </p>
                  </li>
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </React.Fragment>
    </div>
  );
}

export default Education;
