import React from "react";
import { Link } from "react-router-dom";

const FooterLeft =()=>{
    return(
        <div className="left">
        <div>
          Masz pytania?<br></br> Skontaktuj się z naszym konsultantem!
          <div className="tel">
            <img
              src="assets/np_phone_2828705_9B9B9B.svg"
              alt="phoneIcon"
            ></img>
            +48 000 000 000
          </div>
          <div className="mail">
            <img
              src="assets/np_mail_933334_9B9B9B.svg"
              alt="EmailIcon"
            ></img>
            kontakt@makemymind.pl
          </div>
          <div className="icons">
            <a
              href="https://www.linkedin.com/company/make-my-mind/"
              target="_blank"
            >
              <img src="assets/Linked_Icon.svg" alt="linkedin"></img>
            </a>
            <a
              href="https://www.facebook.com/makemymindpl/"
              target="_blank"
            >
              <img src="assets/Facebook_Icon.svg" alt="Facebook"></img>
            </a>
            <a href="#">
              <img
                src="assets/Twitter_Icon.svg"
                alt="Twitter"
                target="_blank"
              ></img>
            </a>
            <a
              href="https://www.instagram.com/make_my_mind/"
              target="_blank"
            >
              <img
                src="assets/Instagram_Icon.svg"
                alt="Instagram"
              ></img>
            </a>
          </div>
        </div>
      </div>
    )
}

export default FooterLeft;