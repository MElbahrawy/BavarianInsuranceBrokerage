import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import phone from "../../assets/images/Phone.png";
export default function Application() {
  return (
    <section id="application-section">
      <Container>
        <Row className="justify-content-evenly align-items-end">
          <Col md={7}>
            <h1 className="main-color text-center">حمل الابليكشن دلوقتي</h1>
            <h3 className="text-secondary mb-4 text-center">
              هتلاقي كل خدماتنا هناك
            </h3>
            <Row>
              <Col md={6}>
                <div className="d-flex align-items-center gap-3 fs-5 mb-4">
                  <i class="fa-brands fa-wpforms secondary-color fs-3"></i>
                  <p className="m-0">اعمل طلبك بسهولة</p>
                </div>
                <div className="d-flex align-items-center gap-3 fs-5 mb-4">
                  <i class="fa-regular fa-credit-card secondary-color fs-3"></i>
                  <p className="m-0">أشتري باقات تأمينك</p>
                </div>
              </Col>
              <Col md={6}>
                <div className="d-flex align-items-center gap-3 fs-5 mb-4">
                  <i class="fa-solid fa-wifi secondary-color fs-3"></i>
                  <p className="m-0">تواصل سريع مع الشركة</p>
                </div>
                <div className="d-flex align-items-center gap-3 fs-5 mb-4">
                  <i class="fa-solid fa-shield secondary-color fs-3"></i>
                  <p className="m-0">أمن علي نفسك ، صحتك ، عربيتك ...</p>
                </div>
              </Col>
            </Row>
            <div className="d-flex w-100 my-4 align-items-center gap-4 justify-content-center">
              <a href="#">
                <img
                  src="https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/640px-Download_on_the_App_Store_Badge.svg.png"
                  alt=""
                />
              </a>
            </div>
          </Col>
          <Col md={3} className="screen">
            <img src={phone} alt="" className="mx-auto" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
