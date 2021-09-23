import { Col } from 'react-bootstrap';
import { Member } from '../interfaces/member';

export function MemberList({member}: {member: Member}): JSX.Element {
    return <Col> 
    <table className="table">
        <thead className="thead-dark">
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
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