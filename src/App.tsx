import React, { useState } from 'react';
import MEMBERS from './assets/members.json'
import './App.css';
import { MemberList } from './components/MemberList';
import { ScreeningForm } from './components/ControlPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'
import { Person } from './interfaces/member'

function App(): JSX.Element {
  const [club, setClub] = useState<Person[]>(MEMBERS);
  const c = {addMember};
  
  function addMember(person: Person){
    setClub([...club, person]);
  }

  return (
    <Container className="App">
      <Row>
        <ScreeningForm addMember={addMember}></ScreeningForm>
      </Row>
      <Row>
        <MemberList></MemberList>
      </Row>
    </Container>
  );
}

export default App;
