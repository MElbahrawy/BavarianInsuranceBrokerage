import React from "react";
import logo from "../../assets/images/NewLogo2.png";
import { Link } from "react-router-dom";
export default function CompanyCol() {
  return (
    <>
      <Link to={"/"}>
        <img src={logo} alt="" className="mb-4" />
      </Link>
      <p>
        الشـــركة البـــــــافارية للوســــاطة التـــــأمينية ( Bavarian
        Insurance Brokerage BIB ) ( ش.م.م ) خاضعة لأحكام القانون رقم ( 159) لسنة
        1981 ، ومسجلة بسجل هيئة الاستثمار رقم 119992 بتاريخ 18/04/2018 والقانون
        رقم (10) لسنة 1981 بإصدار قانون الأشراف والرقابة على التأمين فى مصر
      </p>
    </>
  );
}
