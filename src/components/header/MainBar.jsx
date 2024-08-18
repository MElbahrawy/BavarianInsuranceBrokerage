import React from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../../assets/images/NewLogo.png";
import { Link } from "react-router-dom";
export default function MainBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={Logo} alt="" className="main-logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-5">
            <Nav.Link href="">
              <Link to="/">الرئيسيه</Link>
            </Nav.Link>
            <NavDropdown title="الافراد " id="basic-nav-dropdown">
              <NavDropdown.Item href="#">
                <Link to="/Medical-Insurance">تأمين الحوادث الشخصية</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <Link to="/Medical-Insurance">تأمين حماية الاسرة</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <Link to="/Medical-Insurance">
                  التأمين التكاملي علي السيارات
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <Link to="/Medical-Insurance">التأمين علي السفر</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <Link to="/Medical-Insurance">التأمين علي الحياة</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <Link to="/Medical-Insurance">التأمين الطبي</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="الشركات " id="basic-nav-dropdown">
              <NavDropdown.Item href="#">
                <Link to="/Medical-Insurance">تأمين الممتلكات</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <Link to="/Medical-Insurance">التأمين الهندسي</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <Link to="/Medical-Insurance">التأمين البحري</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <Link to="/Medical-Insurance">
                  التأمين التكميلي علي السيارات
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <Link to="/Medical-Insurance">تأمينات الحوادث العامة</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <Link to="/Medical-Insurance">تأمين الطاقة</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <Link to="/Medical-Insurance">التأمين علي الحياة</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <Link to="/Medical-Insurance">التأمين الطبي</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <Link to="/Medical-Insurance">التقاعد الجماعي للموظفين</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <Link to="/Medical-Insurance">برنامج العمليات الجراحية</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="">
              <Link to={"/About"}>عن الشركة</Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to={"/Claims"}>التعويضات</Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to={"/Contact"}>اتصل بنا</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
