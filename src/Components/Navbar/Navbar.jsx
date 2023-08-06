import { Nav, Container, Navbar, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { BiShoppingBag } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
export default function NavBar() {
    return (
        <Navbar expand="lg" className="bg-success">
            <Container>
                <Navbar.Brand href="#home" className=''>
                    <Image src='/Img/Nike.png' className='w-25' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto ">

                        <Nav.Link href="Home">
                            <Link to='/' className='text-decoration-none text-black'> Home </Link>
                        </Nav.Link>

                        <Nav.Link href="#link">KIDS</Nav.Link>
                        <Nav.Link href="#link">MENS</Nav.Link>
                        <Nav.Link href="#link">WOMENS</Nav.Link>

                    </Nav>
                    <div className="d-flex ">
                        <Button className='bg-light d-flex justify-content-center align-items-center  rounded-circle  p-2 border-0 me-2'>
                            <BiShoppingBag className='text-black fs-4 ' />
                        </Button>
                        <Button className='bg-light  d-flex justify-content-center align-items-center rounded-circle p-2 border-0'>
                            <AiOutlineUser className='text-black fs-4 ' />
                        </Button>
                    </div>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}
