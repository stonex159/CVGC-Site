import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';

export function ScreeningForm(): JSX.Element {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [color, setColor] = useState("");
  
    function validateForm() {
      return email.length > 0 && color.length > 0 && name.length > 0;
    }
  
    function handleSubmit(event: { preventDefault: () => void; }) {
      event.preventDefault();
    }
  
    return (
      <Col className="Login">
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
            <Form.Label className="label">Full Name: </Form.Label>
            <Form.Control
              className="textBox"
              autoFocus
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label className="label">Email: </Form.Label>
            <Form.Control
              className="textBox"
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="healthCheck">
            <Form.Label className="label">Health Check Color: </Form.Label>
            <Form.Control
              className="textBox"
              type="status"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" id="submit" disabled={!validateForm()}>
            Submit
          </Button>
        </Form>
      </Col>
    );
  }