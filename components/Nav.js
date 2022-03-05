import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import toast, { Toaster } from "react-hot-toast";

export default function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [address, setAddress] = useState(null);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div className={`nav ${visible && `nav-blured-bg`}`}>
      <Toaster position="top-center" reverseOrder={false} />
      <Container fluid className="cont">
        <Row className="nav__row">
          <Col md={3} className="nav__logo">
            <img src="/logo.png" alt="logo" />
          </Col>
          <Col sm={0} md={6} className="nav__links hide-on-phone">
            <span className="nav__link">
              <Link href="/">Community</Link>
            </span>

            <span className="nav__link">
              <Link href="/">Market</Link>
            </span>

            <span className="nav__link">
              <Link href="/">Trading</Link>
            </span>
          </Col>

          <Col md={3} className="nav__cta">
            {address ? (
              <button className="btns--connected btns">{address}</button>
            ) : (
              <button
                className="btns"
                onClick={() => connectWallet("injected")}
              >
                Connect wallet
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
