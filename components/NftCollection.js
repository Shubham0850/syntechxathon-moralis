import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NftCard from "./cards/NftCard";
import NftCollectionCard from "./cards/NftCollectionCard";

export default function NftCollection() {
  return (
    <div className="section section-collection">
      <Row className="section__heading">
        <Col md={12}>
          <Image src="/nft.png" alt="cricket" width={100} height={100} />
        </Col>
        <h2 className="h2">nft Collection</h2>
        <Link href="/cricket-nft" className="link">
          <p className="p">Show More</p>
        </Link>
      </Row>
      {/* <Container fluid className="cont">
        <Row className="section__nfts">
          <Col sm={12} md={4}>
            <NftCollectionCard collectionName={"Cricket"} />
          </Col>
          <Col sm={12} md={4}>
            <NftCollectionCard collectionName={"Football"} />
          </Col>
          <Col sm={12} md={4}>
            <NftCollectionCard collectionName={"Hockey"} />
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}
