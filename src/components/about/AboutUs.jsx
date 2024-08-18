import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Col, Row } from "react-bootstrap";
import "./about.css";
export default function AboutUs() {
  return (
    <div>
      <ScrollAnimation animateIn="fadeIn">
        <h2 className="text-center mt-5 mb-4 main-color">
          نبذة عن الشركة البافارية للوساطة التأمينية
        </h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Row className="justify-content-evenly">
          <Col
            md={5}
            className="border shadow-sm p-4 text-center align-items-center d-flex justify-content-center mb-4"
          >
            الشـــركة البـــــــافاريةللوســــاطة التـــــأمينية ( Bavarian
            Insurance Brokerage BIB ) ( ش.م.م ) خاضعة لأحكام القانون رقم ( 159)
            لسنة 1981 ، ومسجلة بسجل هيئة الاستثمار رقم 119992 بتاريخ 18/04/2018
            والقانون رقم (10) لسنة 1981 بإصدار قانون الأشراف والرقابة على
            التأمين فى مصر ولائحتة التنفيذية وتعديلاتهما ، والقانون رقم (10)
            لسنة 2009 بتنظيم الرقابة على الأسواق المالية غير المصرفية ، ومسجلة
            فى الهيئة بالقرار رقم ( 795 ) لسنة 2018 بتاريخ 28/06/2018 وقيدها
            بسجل وسطاء التأمين وإعادة التأمين بالهيئة ( شخص اعتبارى ) تحـــــت
            رقـــــم ( 80 )بتاريخ 28/06/2018 ، برأس مال مصرى 100% . وتتميز
            الشركة بوجود نخبة من وسطاء التأمين المتميزين تم انتقائهم بعناية بهدف
            تطوير المحفظة التأمينية.
          </Col>
          <Col
            md={5}
            className="border shadow-sm p-4 text-center align-items-center d-flex justify-content-center mb-4"
          >
            المقر: محور السادات - البنفسج 5 - فيلا رقم 74 - التجمع الاول -
            القاهرة
          </Col>
        </Row>
      </ScrollAnimation>
    </div>
  );
}
