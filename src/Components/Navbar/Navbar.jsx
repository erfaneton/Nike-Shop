import { Nav, Container, Navbar, Button, Image, Offcanvas } from "react-bootstrap";
import { useContext, useState } from "react";
import { shoes, homePageShoes } from "../../data.jsx";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import "./Navbar.css";
import CategoryContext from "../../Context/shoeContext.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";


const allCategories = ['HOME', ...new Set(shoes.map(shoes => shoes.category))]
export default function NavBar() {


    const shoesDataTransfer = useContext(CategoryContext)
    const onClickHandler = (event) => {
        if (event.target.innerHTML === 'HOME') {
            shoesDataTransfer.setShoesData(homePageShoes)
        } else {
            let filteredShoes = shoes.filter(item => {
                return item.category === event.target.innerHTML
            })
            shoesDataTransfer.setShoesData(filteredShoes)
        }
    }

    return (
        <Navbar expand="lg" className="bg-transparent" style={{ zIndex: '1000' }}>
            <Container fluid>
                <Navbar.Brand href="/" className="" style={{ width: "5rem" }}>
                    <Image src="/Img/Nike.png" className="w-100" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto gap-4">
                        {allCategories.map((category, index) => (
                            <Nav.Link key={index} className="text-white " onClick={onClickHandler}>{category}</Nav.Link>
                        ))}

                    </Nav>
                    <Sidebar />

                    <div className="d-flex ">
                        <Button className="bg-transparent d-flex justify-content-center align-items-center  rounded-circle  p-2 border-0 me-2" >
                            <BiShoppingBag className="fs-4 text-white" />
                        </Button>
                        <Button className="bg-transparent d-flex justify-content-center align-items-center rounded-circle p-2 border-0" onClick={() => shoesDataTransfer.setShow(true)} >
                            <AiOutlineUser className="fs-4 text-white" />
                        </Button>

                    </div>
                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
}
