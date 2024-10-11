import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about-section" className="text-light p-3 my-5">
      <Container className="py-5 px-4 rounded-4">
        <Row>
          <Col md={6}>
            <h1 className="fw-bold secondary-color mb-4">احنا مين ؟</h1>
            <p>
              شركة الوساطة التأمينية خاضعة لأحكام القانون رقم (XXX) لسنة XXXX،
              ومسجلة بسجل هيئة الاستثمار برقم XXXXXX بتاريخ XX/XX/XXXX، ووفقاً
              للقانون رقم (XX) لسنة XXXX لإصدار قانون الإشراف والرقابة على
              التأمين في مصر ولائحته التنفيذية وتعديلاته، وأيضاً القانون رقم
              (XX) لسنة XXXX لتنظيم الرقابة على الأسواق المالية غير المصرفية.
              الشركة مسجلة في الهيئة بالقرار رقم (XXX) لسنة XXXX بتاريخ
              XX/XX/XXXX، وتم قيدها بسجل وسطاء التأمين وإعادة التأمين بالهيئة
              (شخص اعتباري) تحت رقم (XX) بتاريخ XX/XX/XXXX، برأس مال مصري 100%.
            </p>
          </Col>
          <Col md={6}>
            <h1 className="fw-bold secondary-color mb-4">ايه هو دورنا؟</h1>
            <p>
              تسعى الشركة إلى تحقيق التواصل الدائم والمستمر مع عملائها الكرام
              بهدف إتاحة المعلومات الضرورية عن الشركة والتعريف بأنشطتها المختلفة
              وتوفير الحماية التأمينية للعملاء والمشروعات ضد المخاطر المتنوعة.
              يتم ذلك من خلال تأمينات الأشخاص الفردية والجماعية، التأمين الصحي،
              الحوادث الشخصية، وتأمينات الممتلكات والمسؤوليات التي تشمل تأمين
              السيارات، الحريق، البترول، التأمين الهندسي، العنف السياسي، أخطار
              النقل البري والنهرى والبحري والجوي، بالإضافة إلى التأمينات
              الزراعية والقروض.
            </p>
          </Col>
        </Row>

        <Button variant="warning" className="secondary-background text-light">
          <Link to={"/About"}>اعرف عننا اكتر</Link>
        </Button>
      </Container>
    </section>
  );
}
