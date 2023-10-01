import { Button, Card, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { apiGetProduct } from "../../api/sistemtoko";
import { useEffect, useState } from "react";
import Jumbotron from "../../component/Jumbotron";
import TopList from "../../component/TopList";
import { BsFillStarFill, BsHandbag, BsPlusCircleFill } from "react-icons/bs";
import mukena from "../../../image/mukena.webp";
import dress from "../../../image/dress.png";
import jacket from "../../../image/jacket.png";
import tas from "../../../image/tas.png";
import pants from "../../../image/pants.png";
import hijab from "../../../image/hijab.png";
import CardProduct from "../../component/CardProduct";

const HomePage = () => {
    const [Loading, setLoading] = useState(true);
    const [dataProduct, setDataProduct] = useState([]);
    const [Page, setPage] = useState(1);
    const [reload, setReload] = useState(true);
    const [dataJumbotron, setJumbotron] = useState([]);
    const [dataTopList, setTopList] = useState([])

    useEffect(() => {  
        console.log(reload)
        apiGetProduct(Page)
        .then(res => {
            setDataProduct([...dataProduct, ...res.data.aaData])
            if(reload){
                const jumbotron = res.data.aaData.filter(function(filter) { return filter.name == "Lady Olea" })
                setJumbotron(jumbotron)
                const toplist = res.data.aaData.filter(function(filter) { return filter.name == "Corsa Blu" || filter.name == "Cortese" || filter.name == "Dignita White" })
                setTopList(toplist)
            }
        })
        .catch(err => {
        console.log(err.message)
        })
        .finally(() => {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        });
    },[Page]);


// window.onscroll = function() {
//     var scrollLimit = 700;
//     if (window.scrollY <= scrollLimit) {
//       alert("x")
//     }
// }

    return (
        <div>
            {dataJumbotron.length !== 0 &&
            <Jumbotron dataJumbotron={dataJumbotron} />
            }
            {dataTopList.length !== 0 && 
            <TopList dataTopList={dataTopList}/>
            }
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
            <Container className="mt-4">
                <CardProduct dataProduct={dataProduct} />
                <br />
                {Loading ?
                <Button className="btn btn-dark">
                    <Spinner animation="border" size="sm"  /> Loading
                </Button> :
                <Button className="btn btn-dark" 
                    onClick={() => {
                        setReload(false);
                        setPage(Page+1)
                    }}>
                    <BsPlusCircleFill /> Load More
                </Button>
                }
                
                
            </Container>
        </div>
    )
}

export default HomePage;