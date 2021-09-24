import React from 'react';
import { Col } from 'react-bootstrap';
import MEMBERS from '../assets/members.json';
import * as ReactBootStrap from 'react-bootstrap';
import { Person } from '../interfaces/member';

export function MemberList(): JSX.Element {

    function renderList(person: Person, index: number){
        return (
            <tr key={index}>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.status}</td>
            </tr>
        )
    }
    

    return <Col> 
    <ReactBootStrap.Table>
        <thead className="thead-dark">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
        </thead>
        <tbody>
            <tr>
                {MEMBERS.map(renderList)}
            </tr>
        </tbody>
    </ReactBootStrap.Table>
    </Col>

}