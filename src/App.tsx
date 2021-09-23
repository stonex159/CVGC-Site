import React, { useState } from 'react';
import MEMBERS from './assets/members.json'
import './App.css';
import { MemberList } from './components/MemberList';
import { ScreeningForm } from './components/ControlPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'
import { Member} from './interfaces/member'


function App(): JSX.Element {
  const [addMember] = useState<Member>(MEMBERS[0]);
  return (
    <Container className="App">
      <Row>
        <ScreeningForm></ScreeningForm>
      </Row>
      <Row>
        <MemberList member={addMember}></MemberList>
      </Row>
    </Container>
  );
}

export default App;
