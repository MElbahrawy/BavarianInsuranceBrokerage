import React from "react";
import Banner from "../../components/services/Banner";
import { Container } from "react-bootstrap";
import AboutUs from "../../components/about/AboutUs";
import Role from "../../components/about/Role";
import Strategy from "../../components/about/Strategy";
import Care from "../../components/about/Care";

export default function AboutPage() {
  return (
    <section id="about-page">
      <Banner
        img="https://t3.ftcdn.net/jpg/05/06/32/62/360_F_506326245_2GtSGEjKLDtpHS0FSkEBs4gV34DmTtS5.jpg"
        title="من نحن"
      />
      <Container>
        <AboutUs />
        <Role />
        <Strategy />
        <Care />
      </Container>
    </section>
  );
}
