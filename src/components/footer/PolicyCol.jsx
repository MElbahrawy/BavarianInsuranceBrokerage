import React from "react";
import { Link } from "react-router-dom";

export default function PolicyCol() {
  return (
    <>
      <h3 className="mt-5 mb-4">تواصل معنا</h3>
      <ul className="p-0">
        <li className="mb-3">
          <Link to={"/"}>الشروط والاحكام</Link>
        </li>
        <li className="mb-3">
          <Link to={"/"}>سياسة الخصوصية</Link>
        </li>
        <li className="mb-3">
          <Link to={"/"}>سياسة الاستخدام</Link>
        </li>
      </ul>
    </>
  );
}
