import React from "react";
import { Row } from "react-bootstrap";
import TopBar from "./TopBar";
import "./header.css";
import MainBar from "./MainBar";

export default function Header() {
  return (
    <header>
      <TopBar />
      <MainBar />
    </header>
  );
}
