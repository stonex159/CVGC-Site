import React, { useState } from 'react';
import { Col, Modal, ModalBody } from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap';
import { Person } from '../interfaces/member';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import ModalFooter from 'react-bootstrap/esm/ModalFooter';
import Button from '@restart/ui/esm/Button';

export function MemberList(props:{theClub: Person[]}): JSX.Element {

    function renderList(person: Person, index: number){
        return (
            <tr key={index}>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.status}</td>
                <td><button onClick={()=>handleEdit()}>Edit</button></td>
            </tr>
        )
    }

    function handleEdit(){
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
        <Modal>
            <ModalHeader closeButton>
                Edit
            </ModalHeader>
            <ModalBody>

            </ModalBody>
            <ModalFooter>
                <Button>
                    Save Changes
                </Button>
            </ModalFooter>
        </Modal>
    )}
    

    return <Col> 
    <ReactBootStrap.Table>
        <thead className="thead-dark">
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
        </thead>
        <tbody>
            {props.theClub.map(renderList)}
        </tbody>
    </ReactBootStrap.Table>
    </Col>

}