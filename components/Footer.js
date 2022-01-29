import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div className="grad-border"></div>
      <div className="footer">
        <Container fluid className="cont">
          <Row>
            <Col md={6} className="sm-mb-5">
              <img src="/f-logo.png" alt="logo" className="footer__logo mb-3" />
              <p className="p mb-3">
                {`NFT Marketplace for game lovers. Buy, sell, and discover exclusive digital items.`}
              </p>
              {/* <Row>
                <Col>
                  <a
                    href=""
                    rel="noreferrer"
                    target="_blank"
                    className="footer__social-icon"
                  >
                    <Image
                      src="/icons/fb.svg"
                      alt="fb"
                      width={25}
                      height={25}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/sbrphotofilms/?utm_medium=copy_link"
                    rel="noreferrer"
                    target="_blank"
                    className="footer__social-icon"
                  >
                    <Image
                      src="/icons/ig.svg"
                      alt="ig"
                      width={25}
                      height={25}
                    />
                  </a>
                  <a
                    href="https://wa.me/919798936441"
                    rel="noreferrer"
                    target="_blank"
                    className="footer__social-icon"
                  >
                    <Image
                      src="/icons/wa.svg"
                      alt="wa"
                      width={25}
                      height={25}
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCwizlnwmhZgspMOQyUgKqww"
                    rel="noreferrer"
                    target="_blank"
                    className="footer__social-icon"
                  >
                    <Image
                      src="/icons/yt.svg"
                      alt="ig"
                      width={25}
                      height={25}
                    />
                  </a>
                </Col>
              </Row> */}
            </Col>

            <Col md={2} className="sm-mb-5">
              <h3 className="h3 mb-3">Marketplace</h3>
              <div>
                <span className="footer__links">
                  <Link href="/">All NFTs</Link>
                </span>
                <span className="footer__links">
                  <Link href="/about-us">Cricket</Link>
                </span>
                <span className="footer__links">
                  <Link href="/book-now">Football</Link>
                </span>
                <span className="footer__links">
                  <Link href="/portfolio">Kabaddi</Link>
                </span>
              </div>
            </Col>

            <Col md={2} className="sm-mb-5">
              <h3 className="h3 mb-3">Stats</h3>
              <div>
                <span className="footer__links">
                  <Link href="/">All NFTs</Link>
                </span>
                <span className="footer__links">
                  <Link href="/about-us">Cricket</Link>
                </span>
                <span className="footer__links">
                  <Link href="/book-now">Football</Link>
                </span>
                <span className="footer__links">
                  <Link href="/portfolio" className="link">Kabaddi</Link>
                </span>
              </div>
            </Col>

            <Col md={2}>
              <h3 className="h3 mb-3">Quick links</h3>
              <div>
                <span className="footer__links">
                  <Link href="/">Home</Link>
                </span>
                <span className="footer__links">
                  <Link href="/about-us">About Us</Link>
                </span>
                <span className="footer__links">
                  <Link href="/book-now">Book Now</Link>
                </span>
                <span className="footer__links">
                  <Link href="/portfolio">Portfolio</Link>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
        <p className="footer__cright p text-center p-3">
          © All Right is reserved by us. Design and Developed by{" "}
          <a href="http://shubhamraj.live/" rel="noreferrer" target="_blank">
            Shubham Raj
          </a>
        </p>
      </div>
    </div>
  );
}
