import { Col, Container, Image, Row } from "react-bootstrap";
import truckShip from "../../../image/icn_Shipping.svg";
import callUs from "../../../image/icn_callUs.svg";
import chatUs from "../../../image/icn_chat.svg";
import giftCard from "../../../image/icn_giftCards.svg";

const Keunggulan = () => {
    return (
        <div style={{ backgroundColor: "#DDDEDF", marginTop: 60 }} >
        <Container>
            <Row className="px-2">
                <Col md={3} xs={6} className="text-start py-4">
                    <Row>
                    <Col xs={4} className="pt-3"><Image src={truckShip} /></Col>
                    <Col xs={8} style={{ fontSize: "80%" }} >
                        <span className="fw-bold" >Gratis Ongkir</span>
                        <br/>Tanpa Minimal
                        <br/>Belanja
                        
                    </Col>
                    </Row>
                </Col>
                <Col md={3} xs={6}  className="text-start py-4">
                    <Row>
                    <Col xs={3} className="pt-1"><Image src={callUs} /></Col>
                    <Col xs={9} style={{ fontSize: "80%" }}>
                        <span className="fw-bold" >24/7 Costomer
                        <br/>Service
                        </span>
                        <br/>(021) 8291212
                    </Col>
                    </Row>
                </Col>
                <Col md={3} xs={6}  className="text-start py-4">
                    <Row>
                    <Col xs={4} className="pt-1"><Image src={chatUs} /></Col>
                    <Col xs={8} style={{ fontSize: "80%" }}>
                    <span className="fw-bold" >Chat dengan kami</span>
                        <br/>Layanan CHat Online
                        <br/>24 Jam
                    </Col>
                    </Row>
                </Col>
                <Col md={3} xs={6}  className="text-start py-4">
                    <Row>
                    <Col xs={3} className="pt-1"><Image src={giftCard} /></Col>
                    <Col xs={9} style={{ fontSize: "80%" }}>
                    <span className="fw-bold" >Voucher menarik</span>
                        <br/>Untuk kamu yang sering
                        <br/>berbelanja
                    </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Keunggulan;