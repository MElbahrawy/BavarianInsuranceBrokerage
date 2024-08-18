import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Col, Row } from "react-bootstrap";

export default function Strategy() {
  return (
    <div>
      <ScrollAnimation animateIn="fadeIn">
        <h2 className="text-center mt-5 mb-4 main-color">
          استراتيجية الشركة واهدافها ورؤيتها المستقبلية
        </h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Row className="justify-content-evenly">
          <Col
            md={4}
            className="border shadow-sm p-4 text-center align-items-center d-flex justify-content-center mb-4"
          >
            كما تسعى الشركة إلى الارتقاء لتصبح فى مصاف الشركات الكبرى من خلال
            مواكبة التطور السريع لكافة انشطتها ، كما تعمل على تحقيق الحوكمة من
            خلال حماية الحقوق بشكل مطلق للمساهمين ، وحقوق العاملين بها ، وايضا
            حقوق المتعاملين مع الشركة ( العملاء ) ، والاطراف ذات العلاقة من خلال
            الافصاح والشفافية ، وتحقيق التوازن بما يتماشى مع التوجة الاستراتيجى
            للشركة ، كما تعمل على تحقيق افضل معدلات استدامه ممكنة للشركة.
          </Col>
          <Col
            md={3}
            className="border shadow-sm p-4 text-center align-items-center d-flex justify-content-center mb-4"
          >
            كما تحرص الشركة على ميثاق الاخلاق والسلوك المهنى والتى تعمل على ضبط
            السلوك الوظيفى واخلاقيات المهنة داخل الشركة بما يؤثر بالايجاب على
            سمعة ومصداقية الشركة ونزاهة العاملين بها.
          </Col>
          <Col
            md={3}
            className="border shadow-sm p-4 text-center align-items-center d-flex justify-content-center mb-4"
          >
            وتهدف الشركة دائما نحو تحقيق أعلى معدلات الإداء ، وتعمل على الارتقاء
            بالوعى التأمينى لدى جمهور المتعاملين وتوضيح مدى اهمية التأمين فى
            حياة الافراد والمجتمع ، وتدعيم قدرات العاملين الفنية من خلال التدريب
            .. بهدف الوصول مستقبلا الى الريادة والمكانة التى تستحقها شركة
            البافارية.
          </Col>
        </Row>
      </ScrollAnimation>
    </div>
  );
}
