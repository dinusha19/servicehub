import React from "react";
import {Navbar,Container,Nav,Button,Stack} from 'react-bootstrap'

const Navbaritem = () => {
return(
    <>
        <Navbar collapseOnSelect bg="light" expand="lg" variant="light" className="p-3" >
      <Container>
        <Navbar.Brand href="#home">ServiceHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Stack direction="horizontal" gap={3}>
            <Button variant="primary" href="/postRequirement" >Post your requirenments</Button>{' '}
            <Button variant="primary" href="/getPostRequirements" >Post deatils</Button>{' '}
          </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
)
}

export default Navbaritem;