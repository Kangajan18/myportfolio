import React from "react";
import "./Contact.css";
import "font-awesome/css/font-awesome.min.css";

const Contact = () => {
  return (
    <div>
      <div class="card text-center">
        <div class="cardBody">
          <div className="myinformation">
            <ul>
              <label>Personal Information</label>
              <hr />
              <li>
                <i class="fa fa-user" aria-hidden="true" />
                Name: Kanagjan
              </li>
              <li>
                <i class="fa fa-phone" aria-hidden="true" /> phone: 0763126761
              </li>
              <li>
                <i class="fa fa-envelope" aria-hidden="true" />
                E-mail: kangajan18@gmail.com
              </li>
            </ul>
          </div>
          <div className="socialMedia">
            <ul>
              <label>Social Media</label>
              <hr />
              <li>
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>Linkedin
              </li>
              <li>
                <i class="fa fa-facebook-square" aria-hidden="true"></i>Facebook
              </li>
              <li>
                <i class="fa fa-twitter-square" aria-hidden="true"></i>       Twitter
              </li>
            </ul>
          </div>
          <div className="Address">
            <ul>
              <label>Address</label>
              <hr />
              <li>No-4,</li>
              <li>Karuvepulam Road,</li>
              <li>Kokuvil East,</li>
              <li>Jaffna.</li>
            </ul>
          </div>
        </div>
        <div class="card-footer text-muted"> © 2022 Kango Dev Inc;</div>
      </div>
    </div>
  );
};

export default Contact;
