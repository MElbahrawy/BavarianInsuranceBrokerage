import React from "react";
import logo from "../../assets/images/NewLogo2.png";
import { Link } from "react-router-dom";
export default function CompanyCol() {
  return (
    <>
      <Link to={"/"}>
        <img src={logo} alt="" className="mb-4" width={50} />
      </Link>
      <p>
        شركة الوساطة التأمينية خاضعة لأحكام القانون رقم (XXX) لسنة XXXX، ومسجلة
        بسجل هيئة الاستثمار برقم XXXXXX بتاريخ XX/XX/XXXX، ووفقاً للقانون رقم
        (XX) لسنة XXXX لإصدار قانون الإشراف والرقابة على التأمين في مصر.
      </p>
    </>
  );
}
