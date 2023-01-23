import React from "react";
import "./Footer.css";
import shape from "../../../assets/Home/shape-bg.png";

export default function footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={shape}
          alt="You have problem with the image"
        />
      </div>
    </div>
  );
}
