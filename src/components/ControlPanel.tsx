import { useState } from 'react';
import {Button, Col, Form, Row } from 'react-bootstrap';
import { Person } from '../interfaces/member';
import { AlertSelector } from './Alerts';

export function ControlPanel({getMember, showEditModal, addMember}: 
  {getMember: (c:number)=>Person, 
    showEditModal: (b: boolean)=>void, 
    addMember: (p:Person) => void}): JSX.Element {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
  
    function validateForm() { // Makes sure that no text field is empty before submit
      return email.length > 0 && name.length > 0 && status !== "";
    }

    function validateTable() { // Makes sure that there is data to edit
      if(getMember(0))
        return getMember(0).name !== "" && getMember(0).email !== "" && getMember(0).status !== "";
      else
        return false;
    }
  
    function handleSubmit(event: { preventDefault: () => void; }) {
      event.preventDefault();


      addMember({name, email, status}); // creates and saves a member with the data from the control panel into the club array
      setName(""); // clears the name const and text box
      setEmail(""); // clears the email const and text box
      setStatus(""); // unchecks the radio buttons
    }

    function showModal() { // makes the modal appear
      showEditModal(true);
    }
  
    return (
      <Col className="Login">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group  controlId="name">
                <Form.Label className="label">Full Name </Form.Label>
                <Form.Control
                  className="textBox"
                  autoFocus
                  type="name"
                  autoCapitalize = "on"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="email">
                <Form.Label className="label">Email </Form.Label>
                <Form.Control
                  className="textBox"
                  autoFocus
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="healthCheck">
                <Form.Label className="label">Health Check</Form.Label>
                <Form.Group>
                  <Form.Check
                  inline
                  type="radio"
                  name="status"
                  value="Red"
                  id="red-radio"
                  label="Red"
                  checked={status === "Red"}
                  onChange={(e) => setStatus(e.target.value)}
                  />
                  <Form.Check
                  inline
                  type="radio"
                  name="status"
                  value="Yellow"
                  id="yellow-radio"
                  label="Yellow"
                  checked={status === "Yellow"}
                  onChange={(e) => setStatus(e.target.value)}
                  />
                  <Form.Check
                  inline
                  type="radio"
                  name="status"
                  value="Green"
                  id="green-radio"
                  label="Green"
                  checked={status === "Green"}
                  onChange={(e) => setStatus(e.target.value)}
                  />
                </Form.Group>
              </Form.Group>
            </Col>
          </Row>
            <Button className="button" type="submit" id="submit-button" disabled={!validateForm()}>
              Submit
            </Button>
            <Button className="button" id="edit-button" onClick={()=>showModal()} disabled={!validateTable()}>
              Edit
            </Button>
        </Form>
        <AlertSelector status={status}></AlertSelector>
      </Col>
    );
  }
