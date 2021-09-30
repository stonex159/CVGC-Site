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
        setStatus(person.status); // sets the status from the person indexed into the status field
    }

    function saveChanges(event: { preventDefault: () => void; }){
        event.preventDefault();

        changeMember(index, name, email, status); // sends the edit data to be put into the array

        setName(""); // clears the name field upon submission of edit
        setEmail(""); // clears the email field upon submission of edit
        setStatus(""); // clears the status field upon submission of edit
    }

    return (
    <Modal
        show={visible}
        onHide={hide}
        backdrop="static"
        keyboard={false}
        datatestid="modal"
    >
        <ModalHeader closeButton>
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
                    <input type="number" min="1" max={club.length-1} onChange={(ev: React.ChangeEvent<HTMLInputElement>) => handleIndexSearch(ev.target.valueAsNumber)}></input>
                <Button type="submit" id="submit">
                    Search
                </Button>
            </Form>

            <Form
            onSubmit={saveChanges}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control as="textarea" rows={1}
                    value={name}
                    onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setName(ev.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>email</Form.Label>
                    <Form.Control as="textarea" rows={1}
                    value={email}
                    onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setEmail(ev.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Form.Control as="textarea" rows={1}
                    value={status}
                    onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setStatus(ev.target.value)}/>
                </Form.Group>
                <Button type="submit" id="Save Changes" onClick={hide}>
                Save Changes
                </Button>
            </Form>
        </ModalBody>
    </Modal>
)}