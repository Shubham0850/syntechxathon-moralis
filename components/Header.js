import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderNftCard from "./cards/HeaderNftCard";

export default function Header() {
  return (
    <div className="header">
      <div className="bg"></div>
      <Container fluid className="cont">
        <div className="header__container">
          <Row className="header__row">
            <Col sm={12} md={6} className="header__col">
              <div>
                <h1 className="h1">{`NFT's marketplace for Sports lover`}</h1>
                <p className="p mb-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
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
              <HeaderNftCard
                imgSrc={
                  "https://boardroom.tv/wp-content/uploads/2021/11/Overtime-x-NFT-FC.gif"
                }
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
