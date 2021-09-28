import React, { useState } from 'react';
import MEMBERS from './assets/members.json'
import './App.css';
import { MemberList } from './components/MemberList';
import { ControlPanel } from './components/ControlPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'
import { Person } from './interfaces/member'
import { EditModal } from './components/EditModal';
//import { ReactComponent as ClubBanner } from './assets/banner.svg';
//import { ReactComponent as ClubLogo } from './assets/logo.svg';

function App(): JSX.Element {
  const [club, setClub] = useState<Person[]>(MEMBERS);
  const [visible, setVisible] = useState<boolean>(false);
  
  function addMember(person: Person){
    //console.log(person);
    setClub([...club, person]);
  }

  function getMember(index:number){
    return club[index];
  }

  return (
    <Container className="App">
      <Row>
        <ControlPanel getMember={getMember} showEditModal={setVisible}  addMember={addMember}></ControlPanel>
      </Row>
      <Row>
        <MemberList theClub={club}></MemberList>
        <EditModal getMember={getMember} visible={visible} setVisible={setVisible}></EditModal>
      </Row>
    </Container>
  );
}

export default App;
