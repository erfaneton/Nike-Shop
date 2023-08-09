import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { Row, Col, Container } from "react-bootstrap";
import "./Home.css";

export default function Home() {
  return (
    <div className="my-2">
      <Container fluid>
        <Row className="">
          <Col xs={12} md={6} className="order-2 order-lg-1">
            <div className=""></div>
          </Col>
          <Col xs={12} md={6} className="order-1 order-lg-2">
            <div className="">
              <Swiper
                direction={"vertical"}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
