import React from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../../assets/images/NewLogo.png";
export default function MainBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="" className="main-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-5">
            <Nav.Link href="#home">الرئيسيه</Nav.Link>

            <NavDropdown title="الافراد " id="basic-nav-dropdown">
              <NavDropdown.Item href="#">
                تأمين الحوادث الشخصية
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">تأمين حماية الاسرة</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                التأمين التكاملي علي السيارات
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">التأمين علي السفر</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">التأمين علي الحياة</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">التأمين الطبي</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="الشركات " id="basic-nav-dropdown">
              <NavDropdown.Item href="#">تأمين الممتلكات</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">التأمين الهندسي</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">التأمين البحري</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                التأمين التكميلي علي السيارات
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                تأمينات الحوادث العامة
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">تأمين الطاقة</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">التأمين علي الحياة</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">التأمين الطبي</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                التقاعد الجماعي للموظفين
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                برنامج العمليات الجراحية
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">عن الشركة</Nav.Link>
            <Nav.Link href="#link">التعويضات</Nav.Link>
            <Nav.Link href="#link">اتصل بنا</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
