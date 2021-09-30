import { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { Person } from '../interfaces/member';

export function ControlPanel({getMember, showEditModal, addMember}: 
  {getMember: (c:number)=>Person, 
    showEditModal: (b: boolean)=>void, 
    addMember: (p:Person) => void}): JSX.Element {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
  
    function validateForm() { // Makes sure that no text field is empty before submit
      return email.length > 0 && status.length > 0 && name.length > 0;
    }

    function validateTable() { // Makes sure that there is data to edit
      if(getMember(1))
        return getMember(1).name !== "" && getMember(1).email !== "" && getMember(1).status !== "";
      else
        return false;
    }
  
    function handleSubmit(event: { preventDefault: () => void; }) {
      event.preventDefault();

      addMember({name, email, status}); // creates and saves a member with the data from the control panel into the club array
      setName(""); //clears the name box
      setEmail(""); //clears the email box
      setStatus(""); //clears the status box
    }

    function editMember() {
      showEditModal(true);
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
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" id="submit" disabled={!validateForm()}>
            Submit
          </Button>
          <Button id="edit_button" onClick={()=>editMember()} disabled={!validateTable()}>
            Edit
          </Button>
        </Form>
      </Col>
    );
  }
