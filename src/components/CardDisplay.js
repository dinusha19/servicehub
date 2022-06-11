import React from "react";
import {Card,CardGroup} from 'react-bootstrap'

const CardDisplay = () => {
    return (
        <CardGroup className="p-5">
        <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Header>Post/Search yor requirement</Card.Header>
        <br/>
          <Card.Text>
          Find the best matching service provider capable of fulfilling your requirement 
          </Card.Text>
        </Card.Body>
      </Card>
      <br/>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Header>Get a shortlist of service providers</Card.Header>
        <br/>
          <Card.Text>
          Get multiple shortlisted service providers and choose your right provider
          </Card.Text>
        </Card.Body>
      </Card>
      <br/>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Header>Deal with the provider you like</Card.Header>
        <br/>
          <Card.Text>
          Deal with your service provider using our chat option with trust
          </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>
    );
}

export default CardDisplay;