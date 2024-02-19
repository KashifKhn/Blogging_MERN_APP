import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar sticky="top" expand="md" className="bg-body-tertiary border-b-2">
      <Container>
        <Navbar.Brand className="mr-16">
          <NavLink to="/" className="text-3xl font-bold text-red-500">
            Blog App
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "300px" }}
            navbarScroll
          >
            <div className="nav-link">
              <NavLink
                to="/"
                className={
                  ("hover:text-black transition-all duration-100",
                  (isActive) => (isActive ? "underline" : ""))
                }
              >
                Home
              </NavLink>
            </div>
            <div className="nav-link">
              <NavLink to="/new">Create New</NavLink>
            </div>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
