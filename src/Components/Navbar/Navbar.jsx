import { Nav, Container, Navbar, Button, Image } from "react-bootstrap";
import { useContext } from "react";
import { shoes, homePageShoes } from "../../data.jsx";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import "./Navbar.css";
import CategoryContext from "../../Context/shoeContext.jsx";

const allCategories = ['HOME', ...new Set(shoes.map(shoes => shoes.category))]
export default function NavBar() {

    const shoesDataTransfer = useContext(CategoryContext)

    const onClickHandler = (event) => {
        console.log(event.target.innerHTML);
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
        <Navbar expand="lg" className="bg-transparent">
            <Container fluid>
                <Navbar.Brand href="#home" className="" style={{ width: "5rem" }}>
                    <Image src="/Img/Nike.png" className="w-100" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto gap-4">
                        {allCategories.map((category, index) => (
                            <Nav.Link key={index} className="text-white " onClick={onClickHandler}>{category}</Nav.Link>
                        ))}

                    </Nav>
                    <div className="d-flex ">
                        <Button className="bg-light d-flex justify-content-center align-items-center  rounded-circle  p-2 border-0 me-2 text-" >
                            <BiShoppingBag className=" fs-4 text-transparent" />
                        </Button>
                        <Button className="bg-light  d-flex justify-content-center align-items-center rounded-circle p-2 border-0">
                            <AiOutlineUser className="text-transparent fs-4 " />
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
