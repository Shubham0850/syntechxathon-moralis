import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <div className="header">
      <div className="bg"></div>
      <Container fluid className="cont">
        <div className="header__container">
          <Row className="header__row">
            <Col sm={12} md={6} className="header__col">
              <div>
                <h1 className="h1">{`CrOss Chain Wallet Dashboard`}</h1>
                <p className="p mb-5">
                 Your only Defi Dashboard for all your assests - Ethereum, Polygon, Avalanche and more.
                </p>
                <Row>
                  <Col>
                    <Link href="/collections/12">
                      <button className="btns">Collections</button>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={12} md={6} className="header__col sm-mb-5">
              <img src="https://moralis.io/wp-content/uploads/2021/07/hero_new_img.svg"/>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
