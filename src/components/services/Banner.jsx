import React from "react";
import "./services.css";
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
    </div>
  );
}
