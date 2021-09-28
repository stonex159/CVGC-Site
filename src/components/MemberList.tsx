import React, { useState } from 'react';
import { Col, Button } from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap';
import { Person } from '../interfaces/member';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import ModalFooter from 'react-bootstrap/esm/ModalFooter';
import { HandleEdit } from './EditModal';

export function MemberList(props:{theClub: Person[]}): JSX.Element {


    function renderList(person: Person, index: number){
        return (
            <tr key={index}>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.status}</td>
                <td><Button onClick={()=>HandleEdit(person,index)}>Edit</Button></td>
            </tr>
        )
    }

    

    return <Col> 
    <ReactBootStrap.Table>
        <thead className="thead-dark">
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
        </thead>
        <tbody>
            {props.theClub.map(renderList)}
        </tbody>
    </ReactBootStrap.Table>
    </Col>

}