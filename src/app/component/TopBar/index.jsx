
import { Button, Col, Container, Form, Image, InputGroup, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import logo from "../../../image/logo.jpg";
import foto from "../../../image/foto.jpg";
import { FiPhone } from "react-icons/fi";
import { FaSquareInstagram, FaFacebook, FaTwitter } from "react-icons/fa6";
import { RxGlobe } from "react-icons/rx";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsSearch, BsHandbag } from "react-icons/bs";
import { apiGetCategory } from "../../api/sistemtoko";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actSetCategory, actSetSearch } from "../../features/Products/actions";
import { Link } from "react-router-dom";


const TopBar = () => {
    let product = useSelector(state => state.product);
    const dispatch = useDispatch();
    const [dataCategory, setCategory] = useState([]);
    useEffect(() => {  
            apiGetCategory()
            .then(res => {
                setCategory(res.data.aaData)
            })
            .catch(err => {
            console.log(err.message);
        });

    },[]);

    const handleCategory = (category) => {
        dispatch(actSetCategory(category));
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const textSearch = document.getElementById("search").value;
        dispatch(actSetSearch(textSearch));

    }


    return(
        <div style={{ fontFamily: "Poppins" }}  className="bg-light fixed-top" >
            <div style={{ borderBottom: '1px solid #D3D3D3' }} className="py-2" >
            <Container>
            <Row >
                <Col md={6} xs={6} className="text-start " style={{ color: "#A9A9A9" }}>
                    <span className="fs-6"><FiPhone /> (021) 828321</span>
                    <span className="fs-6 ms-3"><FaSquareInstagram /></span>
                    <span className="fs-6 ms-2"><FaFacebook /></span>
                    <span className="fs-6 ms-2"><FaTwitter /></span>
                </Col>
                <Col md={6} xs={6} className="text-end" style={{ color: "#A9A9A9" }}>
                    <span className="fs-6 ms-1"><AiOutlineExclamationCircle /></span>
                    <span className="fs-6 ms-1">Support </span>
                    <span className="fs-6 ms-2"><RxGlobe /></span>
                    <span className="fs-6 ms-1">ID </span>
                </Col>
                </Row>
            </Container>
            </div>
                <Navbar expand="lg" className="bg-light " >
                <Container>
                    <Navbar.Brand><Link to="/" className='text-white text-decoration-none'><Image src={logo} height={40} /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title={product.category ? product.category : 'Kategori'} id="navbarScrollingDropdown">
                        <NavDropdown.Item onClick={(e) => handleCategory('')}>Semua Kategory</NavDropdown.Item>
                        {dataCategory.map((data, i) => (
                            <NavDropdown.Item key={i} onClick={(e) => handleCategory(data.product_category_name)}>{data.product_category_name}</NavDropdown.Item>
                        ))}
                        </NavDropdown>
                      
                        <Nav.Link  to="/" className='text-dark text-decoration-none'>Home</Nav.Link>
                        <Nav.Link onClick={(e) => handleCategory("Hijab")}>Hijab</Nav.Link>
                        <Nav.Link onClick={(e) => handleCategory("Bag")}>Bag</Nav.Link>
                        <Nav.Link >Sale</Nav.Link>
                    </Nav>

                    <Form onSubmit={handleSearch} style={{ width: '100%' }} >   
                        <InputGroup  >
                        <Form.Control 
                            type="search"
                            placeholder="Search"
                            className="me-2 ms-4"
                            aria-label="Search"
                            id="search"
                            />
                        <Button variant="btn-link" onClick={handleSearch}><BsSearch className="fs-5"/></Button>
                        </InputGroup> 
                        </Form>

                    <div className="d-flex" width={"100%"}>
                  
                        <Button variant="btn-link" className="position-relative"><BsHandbag className="fs-5" />

                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-3 ">
                            0
                        </span>
                        </Button>
                        <span className="fs-6 ms-4 mt-2">Hai, </span>
                        <span className="fs-6 ms-1 mt-2"> Andri </span>
                        <Image src={foto} alt="avatar" width={25} height={25} roundedCircle className="ms-2 mt-2" />
                        
                    </div>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>

    )
}

export default TopBar;