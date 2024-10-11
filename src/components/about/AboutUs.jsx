import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Col, Row } from "react-bootstrap";
import "./about.css";
export default function AboutUs() {
  return (
    <div>
      <ScrollAnimation animateIn="fadeIn">
        <h2 className="text-center mt-5 mb-4 main-color">
          نبذة عن شركة الوساطة التأمينية
        </h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Row className="justify-content-evenly">
          <Col
            md={5}
            className="border shadow-sm p-4 text-center align-items-center d-flex justify-content-center mb-4"
          >
            شركة الوساطة التأمينية خاضعة لأحكام القانون رقم (XXX) لسنة XXXX،
            ومسجلة بسجل هيئة الاستثمار برقم XXXXXX بتاريخ XX/XX/XXXX، ووفقاً
            للقانون رقم (XX) لسنة XXXX لإصدار قانون الإشراف والرقابة على التأمين
            في مصر ولائحته التنفيذية وتعديلاته، وأيضاً القانون رقم (XX) لسنة
            XXXX لتنظيم الرقابة على الأسواق المالية غير المصرفية. الشركة مسجلة
            في الهيئة بالقرار رقم (XXX) لسنة XXXX بتاريخ XX/XX/XXXX، وتم قيدها
            بسجل وسطاء التأمين وإعادة التأمين بالهيئة (شخص اعتباري) تحت رقم (XX)
            بتاريخ XX/XX/XXXX، برأس مال مصري 100%.
          </Col>
          <Col
            md={5}
            className="border shadow-sm p-4 text-center align-items-center d-flex justify-content-center mb-4"
          >
            المقر: XXX - القاهرة
          </Col>
        </Row>
      </ScrollAnimation>
    </div>
  );
}
