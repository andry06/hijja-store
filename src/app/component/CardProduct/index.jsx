import { Button, Card, Col, Row } from "react-bootstrap";
import { BsFillStarFill, BsHandbag } from "react-icons/bs";

const CardProduct = ({dataProduct}) => {
    return (
        <>
        <Row>
            <Col sm={5}><hr /></Col>
            <Col sm={2}><h3 className="fw-bold">List Produk</h3></Col>
            <Col sm={5}><hr /></Col>
        </Row>      
        <Row>
            {dataProduct.map((data, i) => (
                <Col xl={3} md={4} xs={6} key={i} >
                    <Card className="mt-4" style={{ minHeight: '380px',  border: '1px solid #D3D3D3' }}>
                        <Card.Img variant="top" src={data.photo} height={250}/>
                        <Card.Body className="text-start">
                            <Card.Title className="h6">{data.name}</Card.Title>
                            <Card.Text style={{ fontSize: '80%', textAlign: 'justify'}}>
                               <BsFillStarFill className="text-warning mb-1" /> <span className="fw-bold">4.6</span> (142 Review)
                            </Card.Text>
                        
                            <Card.Text className="text-danger fw-bold">
                               Rp {data.price}
                              
                            </Card.Text>
                            <Card.Text className="text-center" >
                                <Button className="btn-sm btn-dark py-1 px-2" style={{ fontSize: '10' }}><BsHandbag className="mb-1" /> Masukkan ke Keranjang</Button>
                            </Card.Text>
                        </Card.Body>
                         
                    </Card>
                </Col>
            ))}
        </Row>
        </>
    )
}

export default CardProduct;