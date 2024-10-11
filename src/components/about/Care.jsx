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
            تتضمن استراتيجية الشركة الاهتمام بتدريب العاملين على جميع أنواع
            التأمين ومواكبة كل ما هو جديد في سوق التأمين المصري من خلال الدورات
            التدريبية وبرامج الإعداد والتأهيل لمزاولة مهنة الوساطة التأمينية
            التي تقدمها معاهد التأمين المتخصصة مثل معهد التأمين في مصر ومعهد
            الخدمات المالية بالهيئة العامة للرقابة المالية. كما تشمل
            الاستراتيجية المشاركة في فعاليات المؤتمرات والندوات التي يعقدها
            الاتحاد المصري للتأمين والاتحاد العربي للتأمين.
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
