import React from "react";
import { Container, NavDropdown } from "react-bootstrap";
import UnopDropdown from "unop-react-dropdown";

export default function TopBar() {
  return (
    <div className="text-light p-2">
      <Container className="d-flex justify-content-between align-items-center">
        <ul className="gap-4 m-0 p-0">
          <li>
            <a href="#">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title=<i class="fa-solid fa-globe ms-2"></i>
          menuVariant="light"
        >
          <NavDropdown.Item href="#" className="">
            <img
              src="https://img.icons8.com/?size=15&id=15521&format=png&color=000000"
              alt=""
            />
            <p className="m-0 me-2 d-inline-block">العربية</p>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">
            <img
              src="https://img.icons8.com/?size=15&id=15534&format=png&color=000000"
              alt=""
            />
            <p className="m-0 me-2 d-inline-block">English</p>
          </NavDropdown.Item>
        </NavDropdown>
      </Container>
    </div>
  );
}
