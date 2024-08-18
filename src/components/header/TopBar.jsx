import React from "react";
import { Container, NavDropdown } from "react-bootstrap";
import UnopDropdown from "unop-react-dropdown";

export default function TopBar() {
  return (
    <div className="text-light p-2">
      <Container className="d-flex justify-content-between align-items-center">
        <ul className="gap-4 m-0 p-0 d-flex">
          <li>
            <a
              href="https://www.facebook.com/bavarian.insurance.brokerage"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/bavarian-insurance-brokerage-bib/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/bavarian_insurance.brokerage/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title={<i class="fa-solid fa-globe ms-2"></i>}
          menuVariant="light"
        >
          <NavDropdown.Item
            href=""
            className="d-flex justify-content-between align-items-center"
            style={{ width: "105px" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/330/330527.png"
              alt=""
              width={20}
            />
            <p className="m-0 me-2 d-inline-block">العربية</p>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item
            href=""
            className="d-flex justify-content-between align-items-center"
            style={{ width: "105px" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/330/330459.png"
              alt=""
              width={20}
            />
            <p className="m-0 me-2 d-inline-block">English</p>
          </NavDropdown.Item>
        </NavDropdown>
      </Container>
    </div>
  );
}
