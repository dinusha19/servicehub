import React from "react";
import {Navbar,Container,Nav,Button,Stack} from 'react-bootstrap'

const Navbaritem = () => {
return(
    <>
        <Navbar  bg="light" expand="lg" variant="light">
        <Container >
        <Stack direction="horizontal" gap={5}>
        <Navbar.Brand className="mx-auto" >ServiceHub</Navbar.Brand>
        <Nav className="me-auto">
        <Stack direction="horizontal" gap={3}>
        <Button variant="primary" href="/serviceProviders">Service Providers</Button>{' '}
        <Button variant="primary" href="/postRequirement" >Post your requirenments</Button>{' '}
        <Button variant="primary" href="/getPostRequirements" >Post deatils</Button>{' '}
        </Stack>
        </Nav>
        </Stack>
        </Container>
        </Navbar>
    </>
)
}

export default Navbaritem;