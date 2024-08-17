import React from "react";
import Persons from "../../components/home/Persons";
import Companies from "../../components/home/Companies";
import About from "../../components/home/About";
import Application from "../../components/home/Application";
import Hero from "../../components/home/Hero";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <section class="curved"></section>
      <Persons />
      <Companies />
      <About />
      <Application />
    </div>
  );
}
