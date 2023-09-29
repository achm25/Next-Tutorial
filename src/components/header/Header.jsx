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
            <Navbar expand="lg" className={styles.headerContainer}>
                <Container className={styles.headerContainer}>
                    <Navbar.Brand href="#home">
                        <img
                        src="/images/header-logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
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
                </Container>
                <Form inline>
                    <Row>
                        <Col >
                            <Form.Control
                                type="text"
                                placeholder="Enter your search here..."
                                className=" mr-sm-2"
                            />
                        </Col>
                        <Col>
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Navbar>
        </>
    );
};

export default Header;