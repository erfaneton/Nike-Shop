import "./Footer.css";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FiYoutube } from 'react-icons/fi'
import { Col, Container, Row } from "react-bootstrap";
import SocialIcon from "../SocialIcon/SocialIcon";
import CategoryContext from "../../Context/shoeContext";
import { useContext } from "react";
export default function Footer() {
  const shoesDataTransfer = useContext(CategoryContext);
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col xs={12} md={4} className="d-flex align-items-center justify-content-start">
          <div className="SocialIcons texxt-center">
            <SocialIcon link="#">
              <BsGithub className="text-light fs-4" />
            </SocialIcon>
            <SocialIcon link="#">
              <BsInstagram className="text-light fs-4" />
            </SocialIcon>
            <SocialIcon link="#">
              <BsTwitter className="text-light fs-4" />
            </SocialIcon>
            <SocialIcon link="#">
              <FiYoutube className="text-light fs-4" />
            </SocialIcon>
          </div>
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-center align-items-center">
          <div className="Watch">
            <AiOutlinePlayCircle className="Icons" />
            <span style={{ cursor: "pointer" }}> whatch video </span>
          </div>
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-end align-items-center">
          <div className="Number">
            <h3>0{shoesDataTransfer.activeShoe + 1}</h3>
            <span>/0{shoesDataTransfer.shoesData.length}</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
