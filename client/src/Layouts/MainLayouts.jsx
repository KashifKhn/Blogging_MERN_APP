import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <>
      <Header />
      <main>
        <Container className="my-8">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default MainLayouts;
