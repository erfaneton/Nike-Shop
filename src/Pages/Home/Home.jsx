import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Home.css';
import { Pagination } from 'swiper/modules';
import { Row, Col } from 'react-bootstrap';

export default function Home() {
    return (
        <div>
            <Row className=''>
                <Col xs={12} md={6} className='order-2  ' ></Col>
                <Col xs={12} md={6} className='order-1  '>
                    <Swiper
                        direction={'vertical'}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide> </Swiper>
                </Col>
            </Row>
        </div>
    );
}
