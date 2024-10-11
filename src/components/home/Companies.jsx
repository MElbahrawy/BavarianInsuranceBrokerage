import React from "react";
import ServicesCard from "./ServicesCard";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Heading from "../utilities/Heading";
import pattern from "../../assets/images/Pattern.png";
export default function Companies() {
  const services = [
    {
      label: "تأمين",
      title: "الممتلكات",
      icon: "fa-solid fa-people-carry-box",
      link: "Demo",
      description:
        "هذه الوثيقة تعد الوثيقة الاساسية المصممه لتغطية الممتلكات المؤمن عليها بموجب الوثيقة.",
    },
    {
      label: "التأمين",
      title: "الهندسى",
      icon: "fa-solid fa-building-user",
      link: "Demo",
      description:
        "الأضرار المادية يغطي هذا القسم الخسائر أو الأضرار التي لحقت بأعمال المقاولات وغيرها.",
    },
    {
      label: "التأمين",
      title: "التكميلي علي السيارات",
      link: "Demo",
      icon: "fa-solid fa-car-burst",
      description:
        "مع الزيادة المضطردة فى عدد السيارات و ازدياد عدد حوادث الطرق مما يتسبب فى وقوع خسائر مادية مع الزيادة المضطردة فى عدد السيارات و ازدياد عدد حوادث الطرق مما يتسبب فى وقوع خسائر",
    },
    {
      label: "التأمين",
      title: "علي الحياه",
      icon: "fa-solid fa-hand-holding-droplet",
      link: "Demo",
      description:
        "تحتاج الشركات والمنظمات التقدمية لتقديم مجموعة تنافسية من المزايا الموظفين. من خلال توفير باقات.",
    },
    {
      label: "التأمين",
      title: "الطبي",
      icon: "fa-solid fa-house-medical",
      link: "Demo",
      description:
        "تحتاج الشركات والمنظمات التقدمية لتقديم مجموعة تنافسية من المزايا للموظفين. من خلال توفير باقات.",
    },
    {
      label: "التأمين",
      title: "البحري",
      icon: "fa-solid fa-ship",
      link: "Demo",
      description:
        "التأمين الذي يغطي نقل جميع أنواع البضائع بغض النظر عن طريقة نقلها ،سواء البحر او الجو.",
    },
    {
      label: "تأمينات",
      title: "الحوادث العامة",
      icon: "fa-solid fa-seedling",
      link: "Demo",
      description:
        "تغطي الوثيقة المسؤولية القانونية للمؤمن له عن الأضرار الماديه و أو الموت و الإصابات الشخصية.",
    },
    {
      label: "تأمين",
      title: "الطاقة",
      icon: "fa-solid fa-bolt",
      link: "Demo",
      description:
        "تغطى الخسارة المادية أو الضرر المادي الذي يحدث للممتلكات المؤمن عليها التي تحتاج إلى إصلاح.",
    },
    {
      label: "التقاعد",
      title: "الجماعي للموظفين",
      icon: "fa-solid fa-users-line",
      link: "Demo",
      description:
        "وفر لموظفيك المعاش الذى يستحقونه بعد سنوات من العمل فى شركتك، وامنحهم سنين التقاعد الذهبية.",
    },
    {
      label: "برنامج",
      title: "العمليات الجراحية",
      icon: "fa-solid fa-user-doctor",
      link: "Demo",
      description:
        "برنامج العمليات الجراحية هو الحل الطبي الأنسب لتوفير أفضل رعاية لموظفيك وأسرهم فى حال تطلبت حالة.",
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
    <section className="companies-section position-relative overflow-hidden bg-body-secondary py-3">
      <Container className="">
        <Heading title="للشركات" />
        <Carousel
          responsive={responsive}
          infinite={false}
          removeArrowOnDeviceType={[""]}
          containerClass="carousel-container top-0"
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
