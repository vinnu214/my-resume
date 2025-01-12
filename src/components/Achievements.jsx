import React from "react";
import Heading from "./Heading";
import Icon__Certificate from 'icons/certificate.png';
import Icon__Download from 'icons/download.png';
import { AchievementsList } from "resumeData";


const openCertificate =(Cert)=>{
  window.open(Cert.path+'#toolbar=0', 'NewWin') 
  return false;
}

function Achievements() {
  return (
    <div data-aos="fade-left" data-aos-delay="2800">
      <Heading heading="Achievements" />
      <ul className="Achievement__Container">
        {AchievementsList.map((Certificate, idx) => (
          <li
            className="Achievement__Sub-Container list Achievement__li "
            key={idx}
            data-aos="fade-left"
            data-aos-delay={(idx + 1) * 100}
          >
            <div
              className="text__Certificate  Achievement__Heading"
              data-aos="fade-left"
            >
              {Certificate.name} ({Certificate.yearOfRelease})
            </div>
            {Certificate.path ? (
              <a href={Certificate.path} download={Certificate.name}>
                <img
                  className="Achievement__Link"
                  data-aos-delay="1000"
                  data-aos="fade-down"
                  src={Icon__Download}
                  alt="Download"
                />
              </a>
            ) : null}
            {Certificate.path ? (
              <img
                className="Achievement__Img"
                data-aos-delay="1000"
                data-aos="fade-down"
                alt="Certificate"
                src={Icon__Certificate}
                onClick={() => {
                  openCertificate(Certificate);
                }}
              />
            ) : null}
            <div
              className="text__Certificate Achievement__Summary"
              data-aos="fade-left"
            >
              {Certificate.certSummary}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Achievements;
