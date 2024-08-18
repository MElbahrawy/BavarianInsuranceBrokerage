import React from "react";
import { Link } from "react-router-dom";

export default function SiteMapCol() {
  return (
    <>
      <h3 className="mt-5 mb-4">خريطة الموقع</h3>
      <ul className="p-0">
        <li className="mb-3">
          <Link to={"/"}>الرئيسيه</Link>
        </li>
        <li className="mb-3">
          <Link to={"/About"}>عن الشركة</Link>
        </li>
        <li className="mb-3">
          <Link to={"/Medical-Insurance"}>التعويضات</Link>
        </li>
        <li className="mb-3">
          <Link to={"/Contact"}>اتصل بنا</Link>
        </li>
      </ul>
    </>
  );
}
