import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

export default function Medical() {
  return (
    <Container className="service-section">
      <ScrollAnimation animateIn="fadeIn">
        <h4 className="text-center mx-md-5 mx-sm-4 mx-xs-3 border shadow rounded-5 p-md-5 p-sm-4 p-3 my-5 main-color">
          يوفر هذا النوع من التأمين الحماية الطبية للمؤمن عليهم سواء كانوا أفراد
          أو شركات أو مؤسسات أو جمعيات بنظام التكلفة الفعلية أو بقسط سنوى محدد
          مسبقاً.
        </h4>
      </ScrollAnimation>
      <Row className="justify-content-between align-items-center">
        <Col md={6}>
          <ul className="p-5 ">
            <ScrollAnimation animateIn="fadeIn">
              <li className="shadow p-2 mb-3 fs-5">
                <i className="fa-solid fa-circle-check secondary-color ms-2"></i>
                العلاج في العيادات الخارجية
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <li className="shadow p-2 mb-3 fs-5">
                <i className="fa-solid fa-circle-check secondary-color ms-2"></i>
                رسوم الاستشارة الطبية
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <li className="shadow p-2 mb-3 fs-5">
                <i className="fa-solid fa-circle-check secondary-color ms-2"></i>
                التحقيقات
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <li className="shadow p-2 mb-3 fs-5">
                <i className="fa-solid fa-circle-check secondary-color ms-2"></i>
                مصاريف المختبر
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <li className="shadow p-2 mb-3 fs-5">
                <i className="fa-solid fa-circle-check secondary-color ms-2"></i>
                الأدوية والعلاج
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <li className="shadow p-2 mb-3 fs-5">
                <i className="fa-solid fa-circle-check secondary-color ms-2"></i>
                مزايا الحوادث الطارئة
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <li className="shadow p-2 mb-3 fs-5">
                <i className="fa-solid fa-circle-check secondary-color ms-2"></i>
                مزايا علاج الأسنان
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <li className="shadow p-2 mb-3 fs-5">
                <i className="fa-solid fa-circle-check secondary-color ms-2"></i>
                خدمات الطوارئ
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <li className="shadow p-2 mb-3 fs-5">
                <i className="fa-solid fa-circle-check secondary-color ms-2"></i>
                مزايا العناية المركزة
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <li className="shadow p-2 mb-3 fs-5">
                <i className="fa-solid fa-circle-check secondary-color ms-2"></i>
                معالجة المريض المقيم
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <li className="shadow p-2 mb-3 fs-5">
                <i className="fa-solid fa-circle-check secondary-color ms-2"></i>
                خدمات الطوارئ
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <li className="shadow p-2 mb-3 fs-5">
                <i className="fa-solid fa-circle-check secondary-color ms-2"></i>
                مزايا العناية المركزة
              </li>
            </ScrollAnimation>
          </ul>
        </Col>
        <Col md={5} className="">
          <img
            src="https://www.opic.texas.gov/wp-content/uploads/2021/12/AdobeStock_261581584-1-scaled.jpeg"
            alt=""
            className="shadow mb-3"
          />
          <Button
            className="main-background text-light px-4 py-2 ms-4"
            variant="primary"
          >
            <Link to="/Contact">أتصل بينا</Link>
          </Button>
          <Button
            className="main-background text-light px-4 py-2"
            variant="primary"
          >
            حمل الابليكيشن
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
