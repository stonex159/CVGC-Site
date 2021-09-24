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
  
  function addMember(person: Person){
    //console.log(person);
    setClub([...club, person]);
  }

  return (
    <Container className="App">
      <Row>
        <ScreeningForm addMember={addMember}></ScreeningForm>
      </Row>
      <Row>
        <MemberList theClub={club}></MemberList>
      </Row>
    </Container>
  );
}

export default App;
