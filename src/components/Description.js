import React from "react";

import * as ApplicantData from "resumeData";

import icon_email from "icons/mail.svg";
import icon_mobile from "icons/mobile.svg";
import icon_location from "icons/location.svg";
import icon_linkedIn from "icons/linkedIn.svg";

function Description() {
  return (
    <div className="Description">
      <div className="Details__Basic">
        <div className="text__applicant" data-aos="fade-left">
          {ApplicantData.name}
        </div>
        <div
          className="text__designation"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          {ApplicantData.currDesignation}
        </div>
      </div>
      <div className="Details__Communication">
        <div
          className="email grid-comm"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <a href={"mailto:" + ApplicantData.mailId}>{ApplicantData.mailId}</a>
          <img className="icon" src={icon_email} alt="email" />
        </div>
        <div
          className="mobile grid-comm"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <a href={"tel:" + ApplicantData.mobileNum}>
            {ApplicantData.mobileNum.split("").splice(0, 3).join("") +
              " " +
              ApplicantData.mobileNum
                .split("")
                .splice(3, ApplicantData.mobileNum.length)
                .join("")}
          </a>
          <img className="icon" src={icon_mobile} alt="mobile" />
        </div>
        <div
          className="location grid-comm"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          <p>{ApplicantData.location}</p>
          <img className="icon" src={icon_location} alt="location" />
        </div>
        <div
          className="linkedIn grid-comm"
          data-aos="fade-right"
          data-aos-delay="1000"
        >
          <a href={ApplicantData.linkedIn.url}>
            {ApplicantData.linkedIn.displayName}
          </a>
          <img className="icon" src={icon_linkedIn} alt="linkedIn" />
        </div>
      </div>
      <div
        className="Description__Summary"
        data-aos="fade-down"
        data-aos-delay="700"
      >
        Knowledgeable Frontend developer with <strong>4+</strong> years of
        experience who adept at creating web and mobile applications which meet
        customer needs. Specialized in collaborating with customers to gather
        requirements, produce plans and improve designs for usability and
        functionality.
      </div>
    </div>
  );
}

export default Description;
