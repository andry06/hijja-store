import { Button, Col, Container, Image, Row } from "react-bootstrap";

import mukena from "../../../image/mukena.webp";
import dress from "../../../image/dress.png";
import jacket from "../../../image/jacket.png";
import tas from "../../../image/tas.png";
import pants from "../../../image/pants.png";
import hijab from "../../../image/hijab.png";

const TopCategory = () => {
    return (
        <>
        <Container className="mt-4">
            <Row>
                <Col xs={6} className="text-start fw-bold fs-5 ps-3">Jelajahi Kategori</Col>
                <Col xs={6} className="text-end pe-3" ><Button variant="outline-dark" className="btn btn-sm me-n4" >Lihat Semua</Button></Col>
            </Row>
        </Container>
            <Container className="mt-2">
                <Row className="ps-3 pe-3">
                    <Col md={2} xs={4} style={{ cursor:'pointer' }}>
                        <Row style={{ border: '1px solid #D3D3D3' }} className="pb-3">
                            <Image src={mukena} width={'100%'} height={120} />
                            <span className="fw-bold" style={{ fontSize: '100%' }}>Mukena</span>
                            <br />
                            <span style={{ fontSize: '90%' }}>330 Product</span>
                        </Row>
                    </Col>
                    <Col md={2} xs={4} style={{ cursor:'pointer' }}>
                        <Row style={{ border: '1px solid #D3D3D3' }} className="pb-3">
                            <Image src={dress} width={'100%'} height={120} />
                            <span className="fw-bold" style={{ fontSize: '100%' }}>Dress</span>
                            <br />
                            <span style={{ fontSize: '90%' }}>230 Product</span>
                        </Row>
                    </Col>
                    <Col md={2} xs={4} style={{ cursor:'pointer' }}>
                        <Row style={{ border: '1px solid #D3D3D3' }} className="pb-3">
                            <Image src={jacket} width={'100%'} height={120} />
                            <span className="fw-bold" style={{ fontSize: '100%' }}>Jacket</span>
                            <br />
                            <span style={{ fontSize: '90%' }}>202 Product</span>
                        </Row>
                    </Col>
                    <Col md={2} xs={4} style={{ cursor:'pointer' }}>
                        <Row style={{ border: '1px solid #D3D3D3' }} className="pb-3">
                            <Image src={tas} width={'100%'} height={120} />
                            <span className="fw-bold" style={{ fontSize: '100%' }}>Bag</span>
                            <br />
                            <span style={{ fontSize: '90%' }}>104 Product</span>
                        </Row>
                    </Col>
                    <Col md={2} xs={4}  style={{ cursor:'pointer' }}>
                        <Row style={{ border: '1px solid #D3D3D3' }} className="pb-3">
                            <Image src={pants} width={'100%'} height={120} />
                            <span className="fw-bold" style={{ fontSize: '100%' }}>Pants</span>
                            <br />
                            <span style={{ fontSize: '90%' }}>88 Product</span>
                        </Row>
                    </Col>
                    <Col md={2} xs={4} style={{ cursor:'pointer' }}>
                        <Row style={{ border: '1px solid #D3D3D3' }} className="pb-3">
                            <Image src={hijab} width={'100%'} height={120} />
                            <span className="fw-bold" style={{ fontSize: '100%' }}>Hijab</span>
                            <br />
                            <span style={{ fontSize: '90%' }}>402 Product</span>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TopCategory;