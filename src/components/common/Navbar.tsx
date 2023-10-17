import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  faClipboard,
  faListUl,
  faSquareCheck,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../redux/store/redux.store";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { changeSelectedCategory } from "../../redux/actions/task.action";

function TDNavbar() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.todos.categories);
  const { selectedCategory } = useAppSelector((state) => state.todos);
  const handleDropDown = (value: string) => {
    dispatch(changeSelectedCategory(value));
  };

  return (
    <Navbar expand="lg" className="navbar" fixed={"top"}>
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
              <Dropdown>
                <Dropdown.Toggle className={"toggle-btn"} id="dropdown-basic">
                  <FontAwesomeIcon icon={faListUl} /> {selectedCategory}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => handleDropDown("All Categories")}
                  >
                    All Categories
                  </Dropdown.Item>
                  {categories.map((category, id) => (
                    <Dropdown.Item
                      key={id}
                      onClick={() => handleDropDown(category)}
                    >
                      {category}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
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
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TDNavbar;
