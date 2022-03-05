import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FaEthereum } from "react-icons/fa";
import { BsLinkedin, BsTwitter, BsInstagram, BsGlobe2 } from "react-icons/bs";

export default function Collections() {
  return (
    <div className="header nft-collection">
      <div className="bg"></div>

      <Container fluid className="cont cont1">
        <img
          src={"/banner-placeholder.png"}
          alt="nft collection banner"
          className="banner-img"
        />

        <div className="social-box">
          <a href="">
            <BsLinkedin className="icon" />
          </a>
          <a href="">
            <BsTwitter className="icon" />
          </a>
          <a href="">
            <BsInstagram className="icon" />
          </a>
          <a href="">
            <BsGlobe2 className="icon" />
          </a>
        </div>
      </Container>
      <Container fluid className="cont">
        <div className="nft-collection__banner"></div>

        <Row className="nft-collection__profile">
          <Col md={"auto"}>
            <img
              src={
                "/placeholder.png"
              }
              alt="profile image"
              className="profile-img"
            />
          </Col>

          <Col md={"auto"}>
            <h2 className="collection-title">Football NFT</h2>
            <p className="p">
              Created By{" "}
              <a href="#" className="link">
                Gulzari
              </a>
            </p>
          </Col>

          <Col className="nft-collection__desc">
            <h2 className="h2">Description</h2>
            <p className="p">desc goes here</p>
          </Col>

          <Col md={"auto"}>
            <div className="nft-collection__details">
              <h3 className="h3">
                <span className="no">5</span>
                <br />
                Items
              </h3>
              <h3 className="h3">
                <span className="no">
                 2
                </span>
                <br />
                Owners
              </h3>
              <h3 className="h3">
                <span className="no">
                 12
                  <FaEthereum className="eth-icon" />
                </span>
                <br />
                Floor Price
              </h3>
              <h3 className="h3">
                <span className="no">
                 123k{" "}
                  <FaEthereum className="eth-icon" />
                </span>
                <br />
                Volume Traded
              </h3>
            </div>
          </Col>
        </Row>
      </Container>

      {/* <Container fluid className="cont">
        <Row className="nft-collection__nfts">
          {nfts.map((nftItem, id) => (
            <Col>
              <CollectionCard
                key={id}
                nftItem={nftItem}
                title={collection?.title}
                listings={listings}
                collectionId={collectionId}
              />
            </Col>
          ))}
        </Row>
      </Container> */}
    </div>
  );
}
