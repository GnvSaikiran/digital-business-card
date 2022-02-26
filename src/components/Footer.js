import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer>
      <a href="https://twitter.com/gnv_kiran" target="_blank">
        <FontAwesomeIcon
          icon="fa-brands fa-twitter-square"
          size="2xl"
          className="fa-icon"
        />
      </a>
      <a href="https://www.facebook.com/gnv.saikiran.75/" target="_blank">
        <FontAwesomeIcon
          icon="fa-brands fa-facebook-square"
          size="2xl"
          className="fa-icon"
        />
      </a>
      <a href="https://www.instagram.com/gnv_saikiran/" target="_blank">
        <FontAwesomeIcon
          icon="fa-brands fa-instagram-square"
          size="2xl"
          className="fa-icon"
        />
      </a>
      <a href="https://www.github.com/GnvSaikiran" target="_blank">
        <FontAwesomeIcon
          icon="fa-brands fa-github-square"
          size="2xl"
          className="fa-icon"
        />
      </a>
    </footer>
  );
}
