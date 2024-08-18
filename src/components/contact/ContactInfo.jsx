import React from "react";
import { Col, Row } from "react-bootstrap";
import "./contact.css";
export default function ContactInfo() {
  return (
    <div className="main-background d-flex p-4 flex-column text-light h-100 overflow-hidden justify-content-evenly">
      <p>محور السادات - البنفسج 5 - فيلا رقم 74 - التجمع الاول - القاهرة</p>
      <iframe
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d215.83503465655997!2d31.470157035907228!3d30.055197856982623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1723978824524!5m2!1sen!2sus"
        height="300"
        className="rounded-box w-100 my-4"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <Row className="mx-3">
        <Col sm={6}>
          <h3>البريد الالكتروني</h3>
          <p>
            <a href="mailto:info@bib-eg.com">info@bib-eg.com</a>
          </p>
        </Col>
        <Col sm={6}>
          <h3>الخط الساخن</h3>
          <p>
            <a href="tel:16543">16543</a>
          </p>
        </Col>
      </Row>
      <Row className="mx-3">
        <Col sm={6}>
          <h3>رقم الهاتف</h3>
          <p>
            <a href="tel:02230777523">02/23077752/3</a>
          </p>
        </Col>
        <Col sm={6}>
          <h3>واتس اب</h3>
          <p>
            <a href="http://wa.me/201004222287">01004222287</a>
          </p>
        </Col>
      </Row>
    </div>
  );
}
