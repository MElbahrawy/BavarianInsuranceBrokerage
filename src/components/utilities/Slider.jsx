import React from "react";
import "./slider.css";
import Carousel from "react-bootstrap/Carousel";
import hero1 from "../../assets/images/hero1.webp";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";
import { Button } from "react-bootstrap";
export default function Slider() {
  return (
    <div id="hero">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={hero1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="fw-bold">التميز فى تقديم الخدمة</h3>
            <p>
              تسعى الشركة البافارية للوساطة التأمينية إلى تحقيق التواصل الدائم
              والمستمر مع عملائها الكرام بهدف إتاحة المعلومات الضرورية عن الشركة
              والتعريف بانشطتها المختلفة وتوفير الحماية التأمينية للعملاء
              والمشروعات.
            </p>
            <Button variant="primary">تعرف علينا</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hero2} alt="First slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hero3} alt="First slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
