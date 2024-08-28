import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CompanyCol from "./CompanyCol";
import "./footer.css";
import ContactCol from "./ContactCol";
import PolicyCol from "./PolicyCol";
import SiteMapCol from "./SiteMapCol";
import CopyRight from "./CopyRight";
export default function Footer() {
  return (
    <footer className="main-background text-light">
      <Container className="p-5">
        <Row className="gap-lg-4 gap-md-2 gap-sm-5 justify-content-between">
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
      <CopyRight />
    </footer>
  );
}
