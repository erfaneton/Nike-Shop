import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./Home.css";
import { useContext, useState, useEffect } from "react";
import CategoryContext from "../../Context/shoeContext.jsx";

export default function Home() {
  const shoesDataTransfer = useContext(CategoryContext);
  const [price, setPrice] = useState("");
  const [view, setView] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setPrice(shoesDataTransfer.shoesData[currentSlide].price);
    setView(shoesDataTransfer.shoesData[currentSlide].View);
  }, [currentSlide, shoesDataTransfer.shoesData]);

  return (
    <div className="my-2">
      <Container fluid>
        <Row className="">
          <Col xs={12} md={6} className="order-2 order-lg-1">
            <div className="LeftRow d-flex justify-content-center flex-column align-items-start h-100">
              <h1 className="TitleLeftRow">JUST DO IT</h1>
              <h4 className="price"></h4>
              <h3 className="text-white price">price: {price}$ </h3>
              <div className="RateContainer d-flex align-items-center mb-4">
                <div className="Star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-white" />
                </div>
                <div className="View">({view} reviews)</div>
              </div>
              <h5 className="SubTitle mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h5>
              <Button
                className="border-0 w-25 py-2 fs-5"
                style={{ backgroundColor: "var(--green)" }}
              >
                SHOP NOW
              </Button>
            </div>
          </Col>
          <Col xs={12} md={6} className="order-1 order-lg-2">
            <div className="">
              <Swiper
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