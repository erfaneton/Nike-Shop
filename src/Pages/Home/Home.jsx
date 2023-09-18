import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Row, Col, Container, Button, Toast, ToastContainer } from "react-bootstrap";
import "./Home.css";
import { useContext, useState, useEffect } from "react";
import CategoryContext from "../../Context/shoeContext.jsx";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


export default function Home() {

  const shoesDataTransfer = useContext(CategoryContext);
  const [currentItem, setCurrentItem] = useState({})
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showToast, setShowToast] = useState(false)


  useEffect(() => {
    setCurrentItem((shoesDataTransfer.shoesData[currentSlide]))
    shoesDataTransfer.setActiveShoe(currentSlide)
  }, [currentSlide, shoesDataTransfer.shoesData])

  return (
    <div className="my-2">

      <Container fluid>
        <Row className="">
          <Col xs={12} md={6} className="order-2 order-lg-1">
            <div className="LeftRow d-flex justify-content-center flex-column align-items-start h-100">
              <h1 className="TitleLeftRow" style={{ color: currentItem.color }}>JUST DO IT</h1>
              <h3 className="text-white price">Price: {currentItem.price}$ </h3>
              <div className="RateContainer d-flex align-items-center mb-4">
                <div className="Star">
                  {
                    currentItem.rate && (
                      <Rating value={currentItem.rate} readOnly emptyIcon={<StarIcon style={{ opacity: '0.9', fill: "#fff8" }} />} />
                    )
                  }
                </div>
                <div className="View">({currentItem.view} reviews)</div>
              </div>
              <h5 className="SubTitle mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h5>
              <Button
                className="border-0 w-25 py-2 fs-5"
                style={{ backgroundColor: currentItem.color }}
                onClick={() => setShowToast(true)}
              >
                SHOP NOW
              </Button>
              <ToastContainer position="bottom-end" className="p-5" >
                <Toast bg='success' onClose={() => setShowToast(false)} show={showToast} delay={2000} autohide>
                  <Toast.Header>
                    <Toast.Body >Shoes have been added to shopping cart</Toast.Body>
                  </Toast.Header>
                </Toast>
              </ToastContainer>
            </div>
          </Col>
          <Col xs={12} md={6} className="order-1 order-lg-2">
            <div className="">
              <Swiper
                defaultValue={0}
                onSlideChange={(swiper) => {
                  setCurrentSlide(swiper.activeIndex);
                }}
                direction={"vertical"}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {shoesDataTransfer.shoesData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img src={item.img} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}