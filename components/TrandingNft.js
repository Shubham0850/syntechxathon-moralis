import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NftCard from "./cards/NftCard";

export default function TrandingNft() {
  return (
    <div className="section">
      <Row className="section__heading">
        <Col md={12}>
          <Image src="/cricket.png" alt="cricket" width={100} height={100} />
        </Col>
        <h2 className="h2">tranding nft</h2>
        <Link href="/cricket-nft" className="link">
          <p className="p">Show More</p>
        </Link>
      </Row>
      <Container fluid className="cont">
        <Row className="section__nfts">
          <Col sm={12} md={3} className="section__col">
            <NftCard
              nftUrl={
                "https://media3.minutemediacdn.com/process?url=https%3A%2F%2F90min-images-original.s3.amazonaws.com%2Fproduction%2Folympique-lyonnais-v-juventus-uefa-champions-league-5e8998e90f5a6e0fde000001.jpg&filters%5Bcrop%5D%5Bw%5D=0.951957671957672&filters%5Bcrop%5D%5Bh%5D=0.9885714285714285&filters%5Bcrop%5D%5Bo_x%5D=0.037142857142857144&filters%5Bcrop%5D%5Bo_y%5D=0.011428571428571429&filters%5Bquality%5D%5Btarget%5D=80&type=.jpg&filters%5Bresize%5D%5Bw%5D=630&filters%5Bresize%5D%5Bh%5D=472"
              }
              userProfilePic={"/placeholder.png"}
              userName={"kunal"}
              userId={"@princeverma"}
              nftPrice={"1.02ETH"}
            />
          </Col>
          <Col sm={12} md={3} className="section__col">
            <NftCard
              nftUrl={
                "https://www.fcbarcelona.com/fcbarcelona/photo/2018/12/07/7e44b5fd-b23a-4f32-a60b-2bfbd4e9e153/PSVEindhoven-FCBarcelona1-2J05FasedeGrupsUEFAChampionsLeague20182019_pic__12i9127-Optimized.jpg"
              }
              userProfilePic={"/placeholder.png"}
              userName={"kunal"}
              userId={"@princeverma"}
              nftPrice={"1.02ETH"}
            />
          </Col>
          <Col sm={12} md={3} className="section__col">
            <NftCard
              nftUrl={
                "https://cdn.vox-cdn.com/thumbor/4i4z9HoXk7PDfGvajzv9w3e5yww=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19884274/454387722.jpg.jpg"
              }
              userProfilePic={"/placeholder.png"}
              userName={"kunal"}
              userId={"@princeverma"}
              nftPrice={"1.02ETH"}
            />
          </Col>
          <Col sm={12} md={3} className="section__col">
            <NftCard
              nftUrl={
                "https://ichef.bbci.co.uk/news/976/cpsprodpb/F5A2/production/_114828826_jamesmaddison976.jpg"
              }
              userProfilePic={"/placeholder.png"}
              userName={"kunal"}
              userId={"@princeverma"}
              nftPrice={"1.02ETH"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
