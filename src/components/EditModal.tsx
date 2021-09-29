import React, { useState } from 'react';
import {Modal, ModalBody, Form, ModalFooter, Button} from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { Person } from '../interfaces/member';

export function EditModal({getMember, checkMember, changeMember, visible, setVisible}: 
    {getMember: (b: number)=>Person, 
    checkMember: (d:number)=>boolean, 
    changeMember: (e:number, f:string, g:string, h:string)=> void, 
    visible: boolean, 
    setVisible: (c:boolean)=>void}): JSX.Element {

    const [index, setIndex] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    const hide = ()=>setVisible(false);

    function handleIndexSearch(num: number){
        if(checkMember(num))
            setIndex(num);
    }

    function handleSearch(event: { preventDefault: () => void; }) {
        event.preventDefault();
        var person = getMember(index);
        setName(person.name);
        setEmail(person.email);
        setStatus(person.status);
        changeMember(index, name, email, status);
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
                        Enter the index of the submission, starting at 1.
                    </Form.Label>
                </Form.Group>
                    <input type="number" onChange={(ev: React.ChangeEvent<HTMLInputElement>) => handleIndexSearch(ev.target.valueAsNumber)}></input>
                <Button type="submit" id="submit">
                    search
                </Button>
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