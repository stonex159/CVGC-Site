import React, { useState } from 'react';
import {Modal, ModalBody, Form, Button} from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { Person } from '../interfaces/member';

export function EditModal({getMember, checkMember, changeMember, visible, setVisible, club}: 
    {getMember: (b: number)=>Person, 
    checkMember: (d:number)=>boolean, 
    changeMember: (e:number, f:string, g:string, h:string)=> void, 
    visible: boolean, 
    setVisible: (c:boolean)=>void,
    club: Person[]}): JSX.Element {

    const [index, setIndex] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    const hide = ()=>setVisible(false);

    function handleIndexSearch(num: number){ 
        if(checkMember(num)) // makes sure the index is not out-of-bounds of the array
            setIndex(num);
    }

    function handleSearch(event: { preventDefault: () => void; }){
        event.preventDefault();

        const person = getMember(index);

        setName(person.name); // sets the name from the person indexed into the name field
        setEmail(person.email); // sets the email from the person indexed into the email field
        setStatus(person.status); // selects the radio button according to the status from the person indexed
    }

    function validateForm() {
        return name.length > 0 && email.length > 0;
    }

    function saveChanges(event: { preventDefault: () => void; }){
        event.preventDefault();

        changeMember(index, name, email, status); // sends the edit data to be put into the array
        clearData();        
    }

    function clearData() {
        setName(""); // clears the name field upon submission of edit
        setEmail(""); // clears the email field upon submission of edit
        setStatus(""); // deselects the radio buttons
    }

    return (
    <Modal
        show={visible}
        onHide={hide}
        backdrop="static"
        keyboard={false}
        datatestid="modal"
    >
        <ModalHeader closeButton onClick={clearData}>
            Edit
        </ModalHeader>
        <ModalBody>
            <Form 
            onSubmit={handleSearch}>
                <Form.Group>
                    <Form.Label>
                        Row Number
                    </Form.Label>
                </Form.Group>
                    <input 
                    type="number" 
                    min="1" 
                    max={club.length-1}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) => handleIndexSearch(ev.target.valueAsNumber)}
                    >
                    </input>
                <Button className="button" type="submit" id="search-button">
                    Search
                </Button>
            </Form>

            <Form
            onSubmit={saveChanges}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control as="textarea" rows={1}
                    value={name}
                    autoCapitalize = "on"
                    onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setName(ev.target.value)}/>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control as="textarea" rows={1}
                    value={email}
                    onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setEmail(ev.target.value)}/>
                </Form.Group>
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
                <Button className="button" type="submit" id="save-button" onClick={hide} disabled={!validateForm}>
                Save Changes
                </Button>
            </Form>
        </ModalBody>
    </Modal>
)}