import React from "react";
import { Col, Row } from "react-bootstrap";
import "./contact.css";
export default function ContactInfo() {
  return (
    <div className="main-background d-flex p-4 flex-column text-light h-100 overflow-hidden justify-content-evenly">
      <p>XXX - القاهرة</p>
      <iframe
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7292342.691620567!2d25.582920149134008!3d26.817227248182757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2seg!4v1728650990626!5m2!1sen!2seg"
        height="300"
        className="rounded-box w-100 my-4"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <Row className="mx-3">
        <Col sm={6}>
          <h3>البريد الالكتروني</h3>
          <p>
            <a href="mailto:info@X" className="me-1">
              info@X.com
            </a>
          </p>
        </Col>
        <Col sm={6}>
          <h3>الخط الساخن</h3>
          <a href="tel:XXXXX" className="me-1">
            XXXXX
          </a>
        </Col>
      </Row>
      <Row className="mx-3">
        <Col sm={6}>
          <h3>رقم الهاتف</h3>
          <p>
            <a href="tel:XXXXXXXXXX" className="me-1">
              XX/XXXXXXX/X
            </a>
          </p>
        </Col>
        <Col sm={6}>
          <h3>واتس اب</h3>
          <p>
            <a
              href="http://wa.me/XXXXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="me-1"
            >
              XXXXXXXXXXX
            </a>
          </p>
        </Col>
      </Row>
    </div>
  );
}
