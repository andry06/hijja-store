import { Button,  Container,  Spinner } from "react-bootstrap";
import { apiGetProduct } from "../../api/sistemtoko";
import { useEffect, useState } from "react";
import Jumbotron from "../../component/Jumbotron";
import TopList from "../../component/TopList";
import { BsPlusCircleFill } from "react-icons/bs";
import CardProduct from "../../component/CardProduct";
import TopCategory from "../../component/TopCategory";
import Keunggulan from "../../component/Keunggulan";
import { useSelector } from "react-redux";

import BottomMenu from "../../component/BottomMenu";

const HomePage = () => {
    const [Loading, setLoading] = useState(true);
    const [dataProduct, setDataProduct] = useState([]);
    const [Page, setPage] = useState(1);
    const [reload, setReload] = useState(true);
    const [dataJumbotron, setJumbotron] = useState([]);
    const [dataTopList, setTopList] = useState([])
    const produk = useSelector(state => state.product);
    const search = produk.search;
    

    useEffect(() => {  
        if(reload){
            apiGetProduct(Page, search)
            .then(res => {
                setDataProduct(res.data.aaData)
                    const jumbotron = res.data.aaData.filter(function(filter) { return filter.name == "Lady Olea" })
                    setJumbotron(jumbotron)
                    const toplist = res.data.aaData.filter(function(filter) { return filter.name == "Corsa Blu" || filter.name == "Cortese" || filter.name == "Dignita White" })
                    setTopList(toplist)
            })
            .catch(err => {
            console.log(err.message)
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            });
        }else{
            apiGetProduct(Page, search)
            .then(res => {
                setDataProduct(res.data.aaData)
            })
            .catch(err => {
            console.log(err.message)
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            });
        }
    },[search]);

    useEffect(() => {  
        if(!reload){
            apiGetProduct(Page, search)
            .then(res => {
                setDataProduct([...dataProduct, ...res.data.aaData])
            })
            .catch(err => {
            console.log(err.message)
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            });
        }
    },[Page]);


    return (
        <div>
            {dataJumbotron.length !== 0 &&
            <Jumbotron dataJumbotron={dataJumbotron} />
            }

            {dataTopList.length !== 0 && 
            <TopList dataTopList={dataTopList}/>
            }

            <TopCategory />

            <Container className="mt-4 mb-4">
                <CardProduct dataProduct={dataProduct} />
                <br />
                {Loading ?
                <Button className="btn btn-dark">
                    <Spinner animation="border" size="sm"  /> Loading
                </Button> :
                <Button className="btn btn-dark" 
                    onClick={() => {
                        setTimeout(() => {
                            setLoading(true);
                        }, 500)
                        setReload(false);
                        setPage(Page+1);
                    }}>
                    <BsPlusCircleFill /> Load More
                </Button>
                }
            </Container>
           
           <Keunggulan />

           <BottomMenu />
     
           <div style={{ backgroundColor: "#EDEDEE", marginTop: "50px" }} className="py-3">
            <Container>
                All Rights Reserved © 2019
            </Container>
           </div>
           
        </div>
    )
}

export default HomePage;