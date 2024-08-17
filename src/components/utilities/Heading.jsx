import React from "react";
import logo from "../../assets/images/Logo1.png";
export default function Heading({ title = "تأمين" }) {
  return (
    <h1 className="mt-4 text-center position-relative fw-bold">{title}</h1>
  );
}
