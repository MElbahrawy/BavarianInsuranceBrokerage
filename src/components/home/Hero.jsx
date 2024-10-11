import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import hero from "../../assets/images/Insurance-amico.png";
import { TypeAnimation } from "react-type-animation";
export default function Hero() {
  return (
    <section id="hero" className="py-5">
      <Container>
        <Row className="align-items-center text-center justify-content-evenly">
          <Col lg={5} md={7}>
            <h3 className="text-secondary">التأمين بكل سهولة</h3>
            <h1 className="fw-bold main-color">
              مع شـــركة الوســــاطة التـــــأمينية
            </h1>
            <h2>
              بنقدملك مجموعة واسعة من خدمات وساطة التأمين للأفراد والشركات بجميع
              الأحجام
            </h2>
            <TypeAnimation
              sequence={[
                "أضمن",
                500,
                "أضمن - أسهل",
                500,
                "أضمن - أسهل - أوفر",
                500,
                "أضمن - أسهل",
                500,
                "أضمن",
                500,
                "",
                500,
              ]}
              className="text-secondary fs-3"
              repeat={Infinity}
            />
          </Col>
          <Col md={5} className="justify-content-center d-flex">
            <img src={hero} loading="eager" className="" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
