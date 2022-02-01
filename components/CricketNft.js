import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NftCard from "./cards/NftCard";

export default function CricketNft() {
  return (
    <div className="section">
      <Row className="section__heading">
        <Col md={12}>
          <Image src="/cricket.png" alt="cricket" width={100} height={100} />
        </Col>
        <h2 className="h2">Cricket nft</h2>
        <Link href="/cricket-nft" className="link">
          <p className="p">Show More</p>
        </Link>
      </Row>
      <Container fluid className="cont">
        <Row className="section__nfts">
          <Col sm={12} md={3} className="section__col">
            <NftCard
              nftUrl={
                "https://images.moneycontrol.com/static-mcnews/2021/10/Virat-Kohli-illustration-770x433.jpg?impolicy=website&width=770&height=431"
              }
            />
          </Col>
          <Col sm={12} md={3} className="section__col">
            <NftCard
              nftUrl={
                "https://cdn.siasat.com/wp-content/uploads/2020/12/ms-dhoni-ed.jpg"
              }
            />
          </Col>
          <Col sm={12} md={3} className="section__col">
            <NftCard
              nftUrl={
                "https://akm-img-a-in.tosshub.com/indiatoday/kapil-dev-647_123117032016_2.jpg?oqv.IC5T9ml.IC3LRkoa8q.wp8_FPER_"
              }
            />
          </Col>
          <Col sm={12} md={3} className="section__col">
            <NftCard
              nftUrl={
                "https://cricfit.com/wp-content/uploads/2021/02/Rishabh-Pant.png"
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
