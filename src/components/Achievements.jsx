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
    <React.Fragment>
      <Heading heading="Achievements & Awards" />
      <ul className="Achievement__Container">
        {AchievementsList.map((Certificate,idx) => (
          <li className="Achievement__Sub-Container list Achievement__li " key={idx}>
            <div className="text__Certificate  Achievement__Heading">
              {Certificate.name} ({Certificate.yearOfRelease})
            </div>
              {Certificate.path ?<a href={Certificate.path}  download={Certificate.name}><img className="Achievement__Link"  src={Icon__Download} alt='Download' /></a>:null}
              {Certificate.path ?<img className="Achievement__Img" alt="Certificate" src={Icon__Certificate}  onClick={()=>{openCertificate(Certificate) }} />:null}
            <div className="text__Certificate Achievement__Summary">
              {Certificate.certSummary}
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Achievements;
