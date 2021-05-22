import React from "react";
import Heading from "./Heading";
import { certificationsList as Certs } from "resumeData";

import Icon__Certificate from "icons/certificate.png";
import Icon__Download from "icons/download.png";

const openCertificate = (Cert) => {
  window.open(Cert.path + "#toolbar=0", "NewWin");
  return false;
};

function Cerifications() {
  return (
    <React.Fragment>
      <Heading heading="Certifications" />
      <ul className="Certificate__Container pl-7">
        {Certs.map((Certificate, idx) => (
          <li
            className="Certificate__Sub-Container list Certificate__li "
            key={idx}
          >
            <div className="text__Certificate  Certificate__Heading">
              {Certificate.name}
            </div>
            {Certificate.path ? (
              <a href={Certificate.path} download={Certificate.name}>
                <img
                  className="Certificate__Link"
                  src={Icon__Download}
                  alt="Download"
                />
              </a>
            ) : null}
            {Certificate.path ? (
              <img
                className="Certificate__Img"
                alt="Certificate"
                src={Icon__Certificate}
                onClick={() => {
                  openCertificate(Certificate);
                }}
              />
            ) : null}
            <div className="Certificate__Details">
              <p className="Certificate__institute">
                {Certificate.instituteName}
              </p>
              <p className="Certificate__Date">{Certificate.completionDate}</p>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Cerifications;
