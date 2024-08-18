import React from "react";
import "./services.css";
import logo from "../../assets/images/Logo1.png";
export default function Banner({ img, title }) {
  return (
    <div
      id="banner"
      className="position-relative my-5"
      style={{
        background: `url(${img})`,
      }}
    >
      <span className="darker"></span>
      <h1 className="text-light fw-bold z-3">{title}</h1>
      <img
        src={logo}
        alt=""
        width={50}
        className="position-absolute bottom-0 ms-5 mb-1 start-0 opacity-75"
      />
    </div>
  );
}
