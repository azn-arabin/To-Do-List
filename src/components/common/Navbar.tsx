import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  faClipboard,
  faSquareCheck,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function TDNavbar() {
  return (
    <Navbar expand="sm" className="navbar" fixed={"top"}>
      <Container>
        <Navbar.Brand href="#">
          <Link to={"/"} className={"nav-brand"}>
            <FontAwesomeIcon icon={faTableList} />
            ToDo
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link href="#">
              <Link to="/category" className="nav-item">
                <FontAwesomeIcon icon={faClipboard} />
                Categories
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to="/finished" className="nav-item">
                <FontAwesomeIcon icon={faSquareCheck} />
                Finished
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TDNavbar;
