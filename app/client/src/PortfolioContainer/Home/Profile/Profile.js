import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-deatils">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/mainaliashish/">
                <i className="fa fa-brands fa-linkedin" />
              </a>
              <a href="mailto:mainaliashish@outlook.com">
                <i className="fa fa-thin fa-envelope" />
              </a>
              <a href="https://twitter.com/mainaliashish">
                <i className="fa fa-brands fa-github" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primaryText">
              {""}
              Hello, I am <span className="highlighted-text">Ashish</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primaryText">
              {""}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiasic Developer 🎉",
                    2500,
                    "Fullstack Developer 🌍️",
                    2500,
                    "Data Science 📊",
                    2500,
                    "Backend Developer 🏡",
                    2500,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Hire Me {""}
            </button>
            <a href="ehizcv.pdf" download="Ashish Mainali.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
