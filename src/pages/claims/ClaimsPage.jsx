import React from "react";
import Banner from "../../components/services/Banner";
import Claims from "../../components/claims/Claims";

export default function ClaimsPage() {
  return (
    <section id="claims-page">
      <Banner
        img={
          "https://www.libertyinsurance.com.sg/sites/libertysg/files/styles/insurance_product_top_image/public/2019-11/Main%20Head%20Banner%20For%20Claims.png.jpg.webp?itok=LCi3-1x3"
        }
        title={"التعويضات"}
      />
      <Claims />
    </section>
  );
}
