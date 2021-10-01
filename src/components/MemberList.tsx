import React from 'react';
import { Col, Table } from 'react-bootstrap';
import { Person } from '../interfaces/member';

export function MemberList({theClub}:{theClub: (Person[])}): JSX.Element {

    function renderList(person: Person, index: number){ // renders all the data passsed in from club.map as a table
        return (
            <tr key={index}>
                <td id="row-number">{index+1}</td>
                <td id="name-data">{person.name}</td>
                <td id="email-data">{person.email}</td>
                <td id="status-data">{person.status}</td>
            </tr>
    )}

    return <Col> 
    <Table id="member-table">
        <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {theClub.map(renderList)}
        </tbody>
    </Table>
    </Col>

}