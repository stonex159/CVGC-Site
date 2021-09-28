import React, { useState } from 'react';
import {Modal, ModalBody, Form, ModalFooter, Button} from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { Person } from '../interfaces/member';

export function HandleEdit(person: Person, index: number){
    const [show, setShow] = useState(false);
    const [name, setName] = useState(person.name);
    const [email, setEmail] = useState(person.email);
    const [status, setStatus] = useState(person.status);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function saveEdit(){
        
    }

    return (
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        datatestid="modal"
    >
        <ModalHeader closeButton>
            Edit
        </ModalHeader>
        <ModalBody>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control as="textarea" rows={3}
                    value={name}
                    onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setName(ev.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>email</Form.Label>
                    <Form.Control as="textarea" rows={3}
                    value={email}
                    onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setEmail(ev.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control as="textarea" rows={3}
                    value={status}
                    onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setStatus(ev.target.value)}/>
                </Form.Group>
            </Form>
        </ModalBody>
        <ModalFooter>
            <Button>
                Save Changes
            </Button>
        </ModalFooter>
    </Modal>
)}