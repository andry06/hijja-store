import { FaFacebook, FaSquareInstagram, FaTwitter } from "react-icons/fa6";
import appStore from "../../../image/icn_appStore.svg";
import googlePlay from "../../../image/icn_googlePlay.svg";
import visa from "../../../image/visa.svg";
import mastercard from "../../../image/mastercard.svg";
import americanExpress from "../../../image/american express.svg";
import paypal from "../../../image/paypal.svg";
import discover from "../../../image/discover.svg";
import logo from "../../../image/logo.jpg";
import { Col, Container, Form, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { apiGetCategory } from "../../api/sistemtoko";


const BottomMenu = () => {
    const [dataCategory, setCategory] = useState([]);

    useEffect(() => {  
        apiGetCategory()
        .then(res => {
            setCategory(res.data.aaData.slice(0, 7))
        })
        .catch(err => {
        console.log(err.message);
    });

},[]);

    return(
        <Container className="mt-4">
        <Row>
            <Col md={2} xs={4} className="pt-4">
                <Image src={logo} width={'60%'}/>
                <br />
                <span style={{ fontFamily: "Dear Prudence"}} className="fs-5">Hijja Indonesia</span>
            </Col>
            <Col md={2} xs={4} className="text-start pt-4">
                <h6>Navigasi</h6>
                <ul className="list-unstyled" style={{ color: "#808080", fontSize: "90%" }}>
                    {dataCategory.map((data, i) => (
                        <li key={i}>{data.product_category_name}</li>
                    ))}
                    
                </ul>
            </Col>
            <Col md={2} xs={4} className="text-start pt-4">
                <h6>INFORMASI</h6>
                <ul className="list-unstyled" style={{ color: "#808080", fontSize: "90%" }}>
                    <li>About Us</li>
                    <li>Informasi Pengiriman</li>
                    <li>Privacy & Policy</li>
                    <li>Syarat & Ketentuan</li>
                </ul>
                <h6>BAHASA</h6>
                <Form.Select size="sm">
                    <option>Indonesia</option>
            </Form.Select>
            </Col>
            <Col md={3} xs={6} className="text-start pt-4">
                <h6>CUSTOMER SERVICE</h6>
                <ul className="list-unstyled " style={{ color: "#808080", fontSize: "90%" }}>
                    <li>Customer Service</li>
                    <li>Daftar atau Masuk</li>
                    <li>Referenci Fashion</li>
                    <li>Cookie</li>
                    <li>Keamanan Berbelanja</li>
                </ul>
            </Col>
            <Col md={3} xs={6} className="text-start pt-4" >
                <h6 className="fw-bold">Ikuti Kami</h6>
                <span className="fs-6"><FaSquareInstagram /></span>
                <span className="fs-6 ms-2"><FaFacebook /></span>
                <span className="fs-6 ms-2"><FaTwitter /></span>
                <h6 className="fw-bold mt-2">Hijja Indonesia App</h6>
                <span><Image src={appStore} /></span>
                <span className="ms-2"><Image src={googlePlay} /></span>
                <h6 className="fw-bold mt-2">Metode Pembayaran</h6>
                <span><Image src={visa} /></span>
                <span className="ms-1"><Image src={mastercard} /></span>
                <span className="ms-1"><Image src={americanExpress} /></span>
                <span className="ms-1"><Image src={paypal} /></span>
                <span className="ms-1"><Image src={discover} /></span>

            </Col>
        </Row>
   </Container>
    )
}

export default BottomMenu;