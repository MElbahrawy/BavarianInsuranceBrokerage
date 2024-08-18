import React from "react";
import Banner from "../../components/services/Banner";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <section id="contact-page">
      <Banner
        img={
          "https://static.vecteezy.com/system/resources/thumbnails/005/263/636/small/contact-us-concept-icons-such-as-mobile-phone-e-mail-address-chat-global-communication-on-dark-blue-background-for-presentation-web-banner-article-business-and-network-connection-and-company-free-vector.jpg"
        }
        title={"اتصل بنا"}
      />
      <div className="m-5">
        <Container>
          <Row className="rounded">
            <Col md="6" className="p-0">
              <ContactInfo />
            </Col>
            <Col md="6" className="p-0">
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
