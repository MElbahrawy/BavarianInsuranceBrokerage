import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import claim from "../../assets/images/claims.webp";
import "./claims.css";
export default function Claims() {
  return (
    <div className="main-background text-light my-5 py-5">
      <Container>
        <Row className="justify-content-around align-items-center">
          <Col md={7}>
            <h3 className="secondary-color">كيف يعمل</h3>
            <h1 className="fw-bold m-4">التعويضات</h1>
            <ul className="p-0">
              <li className="d-flex align-items-baseline mb-4">
                <i className="fa-solid fa-circle-check secondary-color"></i>
                <p className="m-0 me-3 fs-5">قدم علي تعويضك بسهولة</p>
              </li>
              <li className="d-flex align-items-baseline mb-4">
                <i className="fa-solid fa-circle-check secondary-color"></i>
                <p className="m-0 me-3 fs-5">
                  اتواصل معانا من{" "}
                  <Link to="/Contact" className="secondary-color">
                    هنا
                  </Link>
                </p>
              </li>
              <li className="d-flex align-items-baseline mb-4">
                <i className="fa-solid fa-circle-check secondary-color"></i>
                <p className="m-0 me-3 fs-5">هنسهلك الخطوات</p>
              </li>
              <li className="d-flex align-items-baseline mb-4">
                <i className="fa-solid fa-circle-check secondary-color"></i>
                <p className="m-0 me-3 fs-5">هنساعدك في كل اجراءات التعويض</p>
              </li>
            </ul>
            <p>
              <span className="ms-1 fw-bold secondary-color">ملاحظة:</span> في
              حالة عدم العثور على حل يرضي المشتكي، يحق للمشتكى في تقديم شكوى إلى
              هيئة الرقابة المالية.
            </p>
            <ul>
              <li>
                <span className="ms-2 fw-bold">الموقع الالكترونى:</span>
                <a
                  href="https://www.xxx.eg"
                  target="_blank"
                  rel="noreferrer"
                  className=" secondary-color"
                >
                  www.xxx.eg
                </a>
              </li>
              <li>
                <span className="ms-2 fw-bold">رقم الهاتف:</span>
                <a href="tel:XXXXXXXXXX" className=" secondary-color">
                  XXXXXXXXXX
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} xs={8}>
            <div className="img-holder position-relative mt-5">
              <img
                src={claim}
                alt=""
                className="w-100 object-fit-contain z-3 position-relative"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
