import React from "react";
import Heading from "./Heading";
import Icon__Certificate from 'icons/certificate.png'
import Icon__Download from 'icons/download.png'
import { certifications as Certs } from "resumeData";


const openCertificate =(Cert)=>{
  window.open(Cert.path+'#toolbar=0', 'NewWin') 
  return false;
}

function Certifications() {
  return (
    <React.Fragment>
      <Heading heading="Achievements & Awards" />
      <ul className="Certificate__Container">
        {Certs.map((Certificate,idx) => (
          <li className="Certificate__Sub-Container Certificate__li" key={idx}>
            <div className="text__Certificate  Certificate__Heading">
              {Certificate.name} ({Certificate.yearOfRelease})
            </div>
              {Certificate.path ?<a href={Certificate.path}  download={Certificate.name}><img className="Certificate__Link"  src={Icon__Download} alt='Download' /></a>:null}
              {Certificate.path ?<img className="Certificate__Img" alt="Certificate" src={Icon__Certificate}  onClick={()=>{openCertificate(Certificate) }} />:null}
            <div className="text__Certificate Certificate__Summary">
              {Certificate.certSummary}
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Certifications;
