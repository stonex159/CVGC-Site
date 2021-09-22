import React, { useState } from 'react';
import MEMBERS from './assets/members.json'
import './App.css';
import { MemberList } from './components/MemberList';
import { ControlPanel } from './components/ControlPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'
import { Member, addMember } from './interfaces/member'


function App(): JSX.Element {
  const [addMember] = useState<Member>(MEMBERS[0]);
  return (
    <Container className="App">
      <Row>
        <ControlPanel></ControlPanel>
      </Row>
      <Row>
        <MemberList member={addMember}></MemberList>
      </Row>
    </Container>
  );
}

export default App;
