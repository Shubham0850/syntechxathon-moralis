import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function NFTDetails() {

  return (
    <div className="header nft-details">
      <div className="bg"></div>
      <Container fluid className="cont">
        <div className="header__container">
          <Row className="header__row">
            <Col sm={12} md={6} className="header__col">
              <div className="nft-details__nft-box">
                <img
                  src={
                    "https://techcrunch.com/wp-content/uploads/2021/12/FC3_itGXEAA6z5g.jpg?w=1024"
                  }
                  alt="nft"
                  className="nft-details__nft"
                />
              </div>
            </Col>
            <Col sm={12} md={6} className="header__col sm-mb-5">
              <div className="nft-details__details">
                <h2 className="nft-name mb-3">Into the Ape Verse: #32</h2>
                <div className="description">
                  <h3 className="h3">desCription</h3>
                  <p className="p">
                    Into the Ape Verse is a collection of 100 unique generative
                    Apes with Indian accessories. This collection will also
                    include Rare & Super Rare Traits.
                  </p>
                </div>
                <Link href="#" className="link">
                  <p className="p mb-5">Into-the-ape-verse</p>
                </Link>

                <div className="flex-box">
                  <a href={"#"} className="nft-details__profile-box">
                    <div className="nft-details__profile-img">
                      <Image
                        src={`/placeholder.png`}
                        alt="profile image"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="nft-details__profile-names">
                      <p className="p">Creater</p>
                      <p className="p">@kunalsihore</p>
                    </div>
                  </a>

                  <a href={"#"} className="nft-details__profile-box">
                    <div className="nft-details__profile-img">
                      <Image
                        src={`/placeholder.png`}
                        alt="profile image"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="nft-details__profile-names">
                      <p className="p">Owener</p>
                      <p className="p">@kunalsihore</p>
                    </div>
                  </a>
                </div>

                <div className="price-box">
                  <p className="p">Reserve Price</p>
                  <h2 className="h2">1.02 ETH</h2>
                </div>

                <button className="btns">Place bid</button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
