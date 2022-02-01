import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NftCard from "./cards/NftCard";

export default function HockeyNft() {
  return (
    <div className="section">
      <Row className="section__heading">
        <Col md={12}>
          <Image src="/cricket.png" alt="cricket" width={100} height={100} />
        </Col>
        <h2 className="h2">hOckey nft</h2>
        <Link href="/cricket-nft" className="link">
          <p className="p">Show More</p>
        </Link>
      </Row>
      <Container fluid className="cont">
        <Row className="section__nfts">
          <Col sm={12} md={3} className="section__col">
            <NftCard   nftUrl={
                "https://static.toiimg.com/thumb/msid-84397724,width-1200,height-900,resizemode-4/.jpg"
              } />
          </Col>
          <Col sm={12} md={3} className="section__col">
            <NftCard   nftUrl={
                "https://thebridge.in/h-upload/2021/07/02/9631-nisha.webp"
              } />
          </Col>
          <Col sm={12} md={3} className="section__col">
            <NftCard   nftUrl={
                "https://static.toiimg.com/thumb/msid-84642983,width-1200,height-900,resizemode-4/.jpg"
              } />
          </Col>
          <Col sm={12} md={3} className="section__col">
            <NftCard   nftUrl={
                "https://img.olympicchannel.com/images/image/private/t_16-9_3200/primary/mjsj0a1ngck2d8zzbtkr"
              } />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
