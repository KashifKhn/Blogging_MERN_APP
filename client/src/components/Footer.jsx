import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fa] text-black border-t-2">
      <Container>
        <div className="flex items-center justify-center py-4">
          <p>© 2021. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
