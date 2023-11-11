import {Navbar, Nav, Container, Offcanvas} from 'react-bootstrap';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default function MenuBar(){
    return(
        <>
        <Navbar 
        bg="light" 
        data-bs-theme="light" 
        fixed="top"
        key={'sm'}
        expand={'sm'}
        >
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand>Logo</Navbar.Brand>
                <Navbar.Offcanvas>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav variant="underline" 
                        defaultActiveKey="#beranda"
                        className="justify-content-end flex-grow-1 pe-3">
                            <Link
                            activeClass='active'
                            to="beranda"
                            spy={true}  duration={500} offset={-60}>
                            Beranda</Link>
                            <Link
                            activeClass='active'
                            to="travel"
                            spy={true}  duration={500} offset={-60}>
                            Travel</Link>
                            <Link
                            activeClass='active'
                            to="tour"
                            spy={true}  duration={500} offset={-60}>
                            tour</Link>
                            <Link
                            activeClass='active'
                            to="rental"
                            spy={true}  duration={500} offset={-60}>
                            rental</Link>
                            <Link
                            activeClass='active'
                            to="kontak"
                            spy={true}  duration={500} offset={-60}>
                            kontak</Link>
                            <Link
                            activeClass='active'
                            to="tentang"
                            spy={true}  duration={500} offset={-60}>
                            tentang</Link>
                            {/* <Nav.Link href='#beranda'>Beranda</Nav.Link>
                            <Nav.Link eventKey="travel" href='#travel'>Travel BDG-JKT</Nav.Link>
                            <Nav.Link eventKey="tour" href='#tour'>Tour Bandung</Nav.Link>
                            <Nav.Link eventKey="rental" href='#rental'>Rental Mobil</Nav.Link>
                            <Nav.Link eventKey="kontak" href='#kontak'>Kontak</Nav.Link>
                            <Nav.Link eventKey="tentang" href='#tentang'>Tentang</Nav.Link> */}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        </>
    )
}