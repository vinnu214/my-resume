import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <div className="FlatIcon__Container">
        <img
          src="https://media.flaticon.com/dist/min/img/logo/flaticon_negative.svg"
          alt="FlatIcon"
          title="Flaticon logo"
        ></img>
        <div className="FlatIcon__Content">
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </div>
      </div>
      <hr></hr>
      <div className="Footer__Copyrights">
        Copyright &#169; 2021.All Rights reserved
      </div>
    </div>
  );
}

export default Footer;
