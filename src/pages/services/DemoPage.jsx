import React from "react";
import Banner from "../../components/services/Banner";
import Medical from "../../components/services/medical/Medical";
import Demo from "../../components/utilities/Demo";

export default function DemoPage() {
  return (
    <section className="my-5">
      <Demo />
      <Banner
        img={
          "https://i.pinimg.com/originals/18/09/aa/1809aadd8b5554064cf10b16c7d9577a.jpg"
        }
        title={"التأمين الطبي"}
      />
      <Medical />
    </section>
  );
}
