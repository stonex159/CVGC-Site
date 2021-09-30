import React from 'react';
import { Col } from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap';
import { Person } from '../interfaces/member';

export function MemberList({theClub}:{theClub: (Person[])}): JSX.Element {

    function renderList(person: Person, index: number){ // renders all the data passsed in from club.map as a table
        return (
            <tr key={index}>
                <td>{displayIndex(index)}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.status}</td>
            </tr>
    )}

    function displayIndex(index: number){ // Keeps the # column from starting at 0 and out of bounds of the data
        if(index>0){
            return index;
        }
    }

    return <Col> 
    <ReactBootStrap.Table>
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
    </ReactBootStrap.Table>
    </Col>

}