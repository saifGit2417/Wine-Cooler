import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './MainNavbar.module.css'

function MainNavbar() {
    return (
        <div className={style.maincontainer}>
            <Navbar bg="" expand="lg" className={style.maincontainer}>
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src="https://cdn11.bigcommerce.com/s-tiaapbjt7a/images/stencil/250x79/wine_coolers_logo_250x79_1645796219__04131.original.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" > <FaSearch /></Button>
                        </Form>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">
                            <p className={style.heading}>FREE DELIVERY</p>
                            <p>To Most Of The UK</p>
                            </Nav.Link>
                            <Nav.Link href="#action2">
                            <p className={style.heading}>01234567890</p>
                            <p>Call the experts</p>
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}

export default MainNavbar