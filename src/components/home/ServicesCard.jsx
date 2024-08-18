import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
export default function ServicesCard({
  label,
  title,
  icon,
  description,
  link,
}) {
  return (
    <div className="bg-light rounded-2 shadow card border-box services-card my-5 mx-2 pt-4 pb-0 px-4">
      <i
        className={`${icon} text-secondary mb-3 services-icon untouchable`}
      ></i>
      <p className="text-secondary m-0 untouchable">{label}</p>
      <Link to={link}>
        <h3 className="fw-bold main-color untouchable mb-2">{title}</h3>
      </Link>
      <p className="untouchable desc m-0">{description}</p>
    </div>
  );
}
