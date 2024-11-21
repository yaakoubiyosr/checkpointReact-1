import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";


function App() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Image />
              <Name />
              <Price />
              <Description />
            </Card.Body>
          </Card>
         
        </Col>
      </Row>
    </Container>
  );
}

export default App;
