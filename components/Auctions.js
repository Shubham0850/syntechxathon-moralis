import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NftCard from "./cards/NftCard";
import AuctionsCard from "./cards/AuctionsCard";

export default function Auctions() {
  return (
    <div className="section" id="auctions">
      <Row className="section__heading">
        <Col md={12}>
          <Image src="/cricket.png" alt="cricket" width={100} height={100} />
        </Col>
        <h2 className="h2">Tranding auctions</h2>
        <Link href="/cricket-nft" className="link">
          <p className="p">Show More</p>
        </Link>
      </Row>
      <Container fluid className="cont">
        <Row className="section__nfts">
          <Col sm={12} md={3} className="section__col">
            <AuctionsCard
              nftUrl={
                "https://cdn.siasat.com/wp-content/uploads/2020/12/ms-dhoni-ed.jpg"
              }
              auctionTimeLeft={"12:30:10"}
              createrName={"@Gulzari"}
              nftName={"Intro to Ape Verse: #01"}
              currentBid={"0.001 ETH"}
              ownerPicUrl={
                "https://cdn.siasat.com/wp-content/uploads/2020/12/ms-dhoni-ed.jpg"
              }
              ownerName={"@Kunal"}
            />
          </Col>
          <Col sm={12} md={3} className="section__col">
          <AuctionsCard
              nftUrl={
                "https://cdn.siasat.com/wp-content/uploads/2020/12/ms-dhoni-ed.jpg"
              }
              auctionTimeLeft={"12:30:10"}
              createrName={"@Gulzari"}
              nftName={"Intro to Ape Verse: #01"}
              currentBid={"0.001 ETH"}
              ownerPicUrl={
                "https://cdn.siasat.com/wp-content/uploads/2020/12/ms-dhoni-ed.jpg"
              }
              ownerName={"@Kunal"}
            />
          </Col>
          <Col sm={12} md={3} className="section__col">
          <AuctionsCard
              nftUrl={
                "https://cdn.siasat.com/wp-content/uploads/2020/12/ms-dhoni-ed.jpg"
              }
              auctionTimeLeft={"12:30:10"}
              createrName={"@Gulzari"}
              nftName={"Intro to Ape Verse: #01"}
              currentBid={"0.001 ETH"}
              ownerPicUrl={
                "https://cdn.siasat.com/wp-content/uploads/2020/12/ms-dhoni-ed.jpg"
              }
              ownerName={"@Kunal"}
            />
          </Col>
          <Col sm={12} md={3} className="section__col">
          <AuctionsCard
              nftUrl={
                "https://cdn.siasat.com/wp-content/uploads/2020/12/ms-dhoni-ed.jpg"
              }
              auctionTimeLeft={"12:30:10"}
              createrName={"@Gulzari"}
              nftName={"Intro to Ape Verse: #01"}
              currentBid={"0.001 ETH"}
              ownerPicUrl={
                "https://cdn.siasat.com/wp-content/uploads/2020/12/ms-dhoni-ed.jpg"
              }
              ownerName={"@Kunal"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
