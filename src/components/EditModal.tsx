import React, { useState } from 'react';
import {Modal, ModalBody, Form, ModalFooter, Button} from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { Person } from '../interfaces/member';

export function EditModal({getMember, visible, setVisible}: {getMember: (b: number)=>Person, visible: boolean, setVisible: (c:boolean)=>void}): JSX.Element {
    const [index, setIndex] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    const hide = ()=>setVisible(false);

    function handleIndexSubmit(str: string): void{
        var num = parseInt(str);
        var person = getMember(num);

        setIndex(num);
        setName(person.name);
        setEmail(person.email);
        setStatus(person.status);
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
            <Form>
                <Form.Group>
                    <Form.Label>
                        Index
                    </Form.Label>
                </Form.Group>
                <Form.Control as="textarea" rows={1}
                    value={index}
                    onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => handleIndexSubmit(ev.target.value)}/>
            </Form>

            <Form>
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
            </Form>
        </ModalBody>
        <ModalFooter>
            <Button onClick={hide}>
                Save Changes
            </Button>
        </ModalFooter>
    </Modal>
)}