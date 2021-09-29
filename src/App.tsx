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

  function checkMember(index:number): boolean{
    if(club[index])
      return true;
    else
      return false
  }

  function changeMember(index:number, newName:string, newEmail:string, newStatus:string){
    console.log(club[index]);
    const p: Person = {...club[index], name: newName, email: newEmail, status: newStatus};
    const newClub = [...club];
    newClub[index] = p;
    setClub(newClub);
    console.log(club[index]);
  }

  return (
    <Container className="App">
      <Row>
        <ControlPanel getMember={getMember} showEditModal={setVisible}  addMember={addMember}></ControlPanel>
      </Row>
      <Row>
        <EditModal getMember={getMember} checkMember={checkMember} changeMember={changeMember} visible={visible} setVisible={setVisible}></EditModal>
        <MemberList theClub={club}></MemberList>
      </Row>
    </Container>
  );
}

export default App;
