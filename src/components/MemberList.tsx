import { Col } from 'react-bootstrap';
import { Member } from '../interfaces/member';

class Person {
    name: string;
    email: string;
    status: string;
  
    constructor(name: string, email: string, status: string) {
      this.name = name;
      this.email = email;
      this.status = status;
    }
  }

export function addMember(member: Member): {name: string; email: string; status: string} {
    const person: Member = new Person(member.name, member.email, member.status);
    return person;
}

export function MemberList({member}: {member: Member}): JSX.Element {
    return <Col> 
    <table className="table">
        <thead className="thead-dark">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.status}</td>
            </tr>
        </tbody>
    </table>
    </Col>

}