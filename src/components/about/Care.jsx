import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Col, Row } from "react-bootstrap";

export default function Care() {
  return (
    <div>
      <ScrollAnimation animateIn="fadeIn">
        <h2 className="text-center mt-5 mb-4 main-color">
          الأهتمام بالتدريب والإرتقاء بالوعى التأمينى
        </h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Row className="justify-content-evenly">
          <Col
            md={5}
            className="border shadow-sm p-4 text-center align-items-center d-flex justify-content-center mb-4"
          >
            تتضمن استراتيجية الشركة البافارية للوساطة التامينية الاهتمام
            بالتدريب للعاملين لكل أنواع التأمين ومسايرة كل ما هو جديد فى سوق
            التأمين المصرى من خلال الدورات التدريبية وبرامج الإعداد و التأهيل
            لمزاولة مهنة الوساطة التأمينية والتى تقدمها معاهد التأمين المتخصصة
            مثل معهد التامين بمصر ومعهد الخدمات المالية بالهيئة العامة للرقابة
            المالية . كذلك المشاركة فى فاعليات المؤتمرات والندوات التى تعقد من
            خلال الاتحاد المصرى للتامين و الاتحاد العربى للتأمين .
          </Col>
          <Col
            md={5}
            className="border shadow-sm p-4 text-center align-items-center d-flex justify-content-center mb-4"
          >
            كذلك الإرتقاء بالوعى التأمينى لدى جمهور المتعاملين وتوضيح مدى أهمية
            التأمين فى حياة الأفراد و المؤسسات والهيئات.
          </Col>
        </Row>
      </ScrollAnimation>
    </div>
  );
}
