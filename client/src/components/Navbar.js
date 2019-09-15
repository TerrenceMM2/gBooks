import React from 'react';
import { Nav, Navbar } from "react-bootstrap";

const styles = {
    icon : {
        marginRight : ".5rem"
    },
    navbar : {
        borderRight : "solid 1px lightgrey",
        margin : 0,
        paddingRight : "1rem"
    },
    search : {
        paddingLeft : "1rem"
    }
}

export default function NavBar(props) {
    return (
        // Uses React Bootstrap (NPM)
        <Navbar sticky="top" bg="light" expand="lg">
            <Navbar.Brand style={styles.navbar} href="/"><img style={styles.icon} src="/favicon.ico" width="30" height="30" alt="gBooks Icon"/>gBooks</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav activeKey={props.location} className="mr-auto">
                    <Nav.Link style={styles.search} href="/">Search</Nav.Link>
                    <Nav.Link href="/saved">Saved</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}