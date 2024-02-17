import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <>
      <Header />
      <main className="w-full h-screen">
        <Container className="mt-4">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default MainLayouts;
