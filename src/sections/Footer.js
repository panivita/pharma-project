import React from "react";
import { Container } from "react-bootstrap";
import "./custom.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <Container fluid="xl" id="contact">
        <ul className="contact-details">
          <li className="copyright">© 2020 Victoria Kush</li>
          <li className="phone-info">
            <a href="tel:71465372" title="nummer of the phone">
              71 46 53 72
            </a>
          </li>
          <li className="email-info">
            <a
              href="mailto:victoria.v.kush@gmail.com?"
              title="e-mail"
              subject="subject text"
              target="_blank"
              rel="noopener noreferrer"
            >
              victoria.v.kush@gmail.com
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};
