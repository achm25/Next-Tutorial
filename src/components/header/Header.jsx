'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './header.module.scss'

const Header = () => {
    return (
        <>
            <Navbar expand="sm" className={styles.headerContainer}>
                <Container fluid className={'d-flex flex-nowrap'}>
                    <Navbar.Brand href="#home">
                        <img
                        src="/images/header-logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                    <Row className={'w-100'}>
                        <Col xs={4}>
                            <Navbar.Collapse>
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <NavDropdown title="Features" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="More" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                        <Col xs={8}>
                            <Form inline>
                                <Row className={'align-items-center w-100 flex-nowrap'}>
                                    <Col className={'px-lg-4'} xs={7}>
                                        <Form.Control
                                            className={styles.searchBar}
                                            type="text"
                                            placeholder="Enter your search here..."
                                        />
                                    </Col>
                                    <Col className={'d-flex justify-content-end'}>
                                        <Button className={'px-3 py-2'} >Add User</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>
        </>
    );
};

export default Header;