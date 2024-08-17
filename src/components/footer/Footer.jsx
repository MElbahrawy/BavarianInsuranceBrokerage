import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CompanyCol from "./CompanyCol";
import "./footer.css";
import ContactCol from "./ContactCol";
import PolicyCol from "./PolicyCol";
import SiteMapCol from "./SiteMapCol";
export default function Footer() {
  return (
    <footer className="p-5 main-background text-light">
      <Container>
        <Row className="gap-lg-4 gap-md-2 gap-sm-5 justify-content-evenly">
          <Col lg={4} md={6} sm={12}>
            <CompanyCol />
          </Col>
          <Col lg={2} md={5} sm={12}>
            <PolicyCol />
          </Col>
          <Col lg={2} md={5} sm={12}>
            <SiteMapCol />
          </Col>
          <Col lg={3} md={5} sm={12}>
            <ContactCol />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
