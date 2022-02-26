import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

export default function Info() {
  return (
    <div className="info">
      <img
        src="https://i.pinimg.com/474x/6e/52/c7/6e52c7fe2447e34bc447b027cc20ea7d.jpg"
        alt="profile pic"
        className="profile--img"
      />
      <h1 className="info--name">Gnv Saikiran</h1>
      <p className="info--role">Software Developer</p>
      <p className="info--website">gnvsaikiran.dev</p>
      <div className="link-container">
        <div className="info--link--container">
          <a
            href="mailto: gajjarapusai1@gmail.com"
            className="profile--email profile--link"
          >
            <FontAwesomeIcon icon="fa-solid fa-envelope" className="fa-email" />
            Email
          </a>
        </div>
        <div className="info--link--container">
          <a
            href="https://www.linkedin.com/in/gnv-kiran/"
            target="_blank"
            className="profile--linkedin profile--link"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-linkedin"
              className="fa-linkedin"
            />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
