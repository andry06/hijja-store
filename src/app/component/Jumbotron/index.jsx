import { Button, Col, Container, Image, Row } from "react-bootstrap";
import jumbotron from "../../../image/jumbotron.png"
import { BsHandbag } from "react-icons/bs";

const Jumbotron = ({dataJumbotron}) => {
    return (
        <Container style={{ marginTop: "120px" }}>
                <div style={{ position: 'relative',textAlign: 'center'}}>
                    <Image src={jumbotron} alt="Andri Suryono" width={'100%'} />
                    <div style={{ position: 'absolute', top: '10%', left: '43%', fontSize: "calc(.5 * (1.5vh + 1.1vw))" }}>
                        <div className="text-start " style={{ width: "95%" }}>
                            <span className="fw-bold fs-6">Best Seller 2023</span>
                            <br/>
                            <span className="fw-bold fs-2">{dataJumbotron[0].name}</span>
                            <br/>
                            <span>{dataJumbotron[0].description.substring(0, 100)}</span>
                            <br/>
                            <span className="fw-bold fs-6 text-danger">Rp {dataJumbotron[0].price}</span>
                            <br/>
                            <Button className="btn-sm btn-dark py-1 px-2 mt-2" style={{ fontSize: "calc(.5 * (1.5vh + 1.1vw))" }}><BsHandbag className="mb-1" /> Masukkan ke Keranjang</Button>
                        </div>
                       
                    </div>
                </div>
        </Container>
    )
}

export default Jumbotron;