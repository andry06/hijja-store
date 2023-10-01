import { Col, Container, Image, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const TopList = ({dataTopList}) => {
    return ( 
        <Container className="mt-4">
                <Row className="pe-3">
                    {dataTopList.map((data, i) => (
                    <Col md={4} xs={4}  className="text-start" key={i} >
                        <Row style={{ border: '1px solid #D3D3D3' }} className="ms-1 ">
                            <Col sm={4} className="text-start" style={{ margin: 0, padding:0 }}>
                            <Image src={data.photo} alt={data.name} width={'100%'} />
                            </Col>
                            <Col sm={8} className="pt-2 ps-4 mb-2" >
                                <span style={{ fontSize: '100%' }}>Dress</span>
                                <br />
                                <h6 style={{ fontSize: '100%' }}>{data.name}</h6>
                                <span className="text-danger" style={{ fontSize: '90%', cursor: "pointer" }}>Beli Sekarang  <BsArrowRight /></span>
                            </Col>
                        </Row>
                    </Col>
                      ))}
                   
                </Row>
            </Container>
    )
}

export default TopList;