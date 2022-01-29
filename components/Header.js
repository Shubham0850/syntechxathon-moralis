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
                <h1 className="h1">NFT's marketplace for Sports lover</h1>
                <p className="p mb-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
                <Row>
                  <Col>
                    <button className="btns">Explore</button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={12} md={6} className="header__col sm-mb-5">
              <HeaderNftCard
                imgSrc={
                  "https://media.voguebusiness.com/photos/61b8dfb99ba90ab572dea0bd/3:4/w_1998,h_2664,c_limit/adidas-nft-voguebus-adidas-nft-dec-21-story.jpg"
                }
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
