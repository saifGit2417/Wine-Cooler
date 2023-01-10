import React from 'react'
import style from './SevenBlock.module.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function SevenBlock() {
    return (
        <div className={style.maincontainer}>
            <Navbar bg="" expand="lg" className={style.container1}>
                <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">All Wine Coolers</Nav.Link>
                            <Nav.Link href="#action2">Freestanding Wine Coolers</Nav.Link>
                            <Nav.Link href="#action2">Integrated Wine Coolers</Nav.Link>
                            <Nav.Link href="#action2">Undercounter Wine Coolers</Nav.Link>
                            <Nav.Link href="#action2">Bottle Capacity</Nav.Link>
                            <Nav.Link href="#action2">Tempreature Zone</Nav.Link>
                            <Nav.Link href="#action2">By Brand</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default SevenBlock