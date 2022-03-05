import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Details() {
  return (
    <div className="section">
      <Row className="section__heading">
        <Col md={12}>
          <img src="/wallet.svg" alt="wallet" width={"200px"} />
        </Col>
        <h2 className="h2">wallet dashboard</h2>
      </Row>
      <Container fluid className="cont">
        <Row className="section__nfts">
          detials
        </Row>
      </Container>
    </div>
  );
}
