import React from "react";
import ServicesCard from "./ServicesCard";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Heading from "../utilities/Heading";

export default function Persons() {
  const services = [
    {
      label: "تأمينات",
      title: "الحوادث الشخصية",
      icon: "fa-solid fa-person-falling-burst",
      link: "/Demo",
      description:
        "يمكن أن تحدث حوادث غير متوقعه مهما كنت حذرا ، قد تضع نفسك وعائلتك في خطر كبير حيث توفر الوثيقة.",
    },
    {
      label: "تأمين",
      title: "حماية الأسره",
      icon: "fa-solid fa-people-roof",
      link: "/Demo",
      description:
        "يغطي تأمين حماية الاسرة المساكن الخاصة بما في ذلك محتوياتها وغيرها من المخاطر العرضية ضد المخاطر الرئيسية.",
    },
    {
      label: "التأمين",
      title: "التكميلي علي السيارات",
      icon: "fa-solid fa-car-burst",
      link: "/Demo",
      description:
        "مع الزيادة المضطردة فى عدد السيارات و ازدياد عدد حوادث الطرق مما يتسبب فى وقوع خسائر مادية فادحة",
    },
    {
      label: "التأمين",
      title: "علي الحياه",
      icon: "fa-solid fa-hand-holding-droplet",
      link: "/Demo",
      description:
        "تتعهد شركة التأمين بدفع مبلغ التامين إلى المستفيد المحدد فى العقد فى حالة وفاة المؤمن عليه خلال مدة العقد.",
    },
    {
      label: "التأمين",
      title: "علي السفر",
      icon: "fa-solid fa-plane",
      link: "/Demo",
      description:
        "التأمين على السفر هو خطة مصممة لتغطية التكاليف غير المتوقعة التي قد تنشأ عندما تسافر إلى أي وجهتك.",
    },
    {
      label: "التأمين",
      title: "الطبي",
      icon: "fa-solid fa-house-medical",
      link: "/Medical-Insurance",
      description:
        "يوفر هذا النوع من التأمين الحماية الطبية للمؤمن عليهم سواء كانوا أفراد أو شركات أو مؤسسات أو جمعيات بنظام.",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="companies-section position-relative overflow-hidden py-3">
      <Container className="mt-5">
        <Heading title="للافراد" />
        <Carousel
          responsive={responsive}
          infinite={false}
          containerClass="carousel-container"
          rtl={true}
          showDots={true}
          dotListClass="custom-dot-list-style"
        >
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              label={service.label}
              title={service.title}
              icon={service.icon}
              description={service.description}
              link={service.link}
            />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
