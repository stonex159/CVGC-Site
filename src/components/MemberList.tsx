import React from 'react';
import { Col } from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap';
import { Person } from '../interfaces/member';

export function MemberList(props:{theClub: Person[]}): JSX.Element {

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