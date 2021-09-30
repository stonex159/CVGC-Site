import React, { useState } from 'react';
import MEMBERS from './assets/members.json'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MemberList } from './components/MemberList';
import { ControlPanel } from './components/ControlPanel';
import { Container, Row } from 'react-bootstrap'
import { Person } from './interfaces/member'
import { EditModal } from './components/EditModal';
//import CVGC_Banner from '../src/assets/CVGC_Wallpaper.png'
import CVGC_Logo from '../src/assets/CVGC_Logo.png'
//import { ReactComponent as ClubBanner } from './assets/banner.svg';
//import { ReactComponent as ClubLogo } from './assets/logo.svg';

function App(): JSX.Element {
  const [club, setClub] = useState<Person[]>(MEMBERS);
  const [visible, setVisible] = useState<boolean>(false);
  
  function addMember(person: Person){ // adds a person to the club array
    setClub([...club, person]);
  }

  function getMember(index:number){ // returns the member from the array found at the index
    return club[index];
  }

  function checkMember(index:number): boolean{ // checks to see if the index is inbound of the array
    if(club[index])
      return true;
    else
      return false;
  }

  function changeMember(index:number, newName:string, newEmail:string, newStatus:string){
    const p: Person = {...club[index], name: newName, email: newEmail, status: newStatus}; // creates a new person with the edit form's properties
    const newClub = [...club]; // creates a shallow copy of the club array

    newClub[index] = p; // replaces the member at the index of the copy-array
    setClub(newClub); // sets club to look at the newClub array
  }

  return (
    
    <Container className="App">
      <img 
        src={CVGC_Logo}
        alt=""
        id="CVGC-Logo"
        />
      <Row>
        <ControlPanel getMember={getMember} showEditModal={setVisible}  addMember={addMember}></ControlPanel>
      </Row>
      <Row>
        <EditModal getMember={getMember} checkMember={checkMember} changeMember={changeMember} visible={visible} setVisible={setVisible} club={club}></EditModal>
        <MemberList theClub={club}></MemberList>
      </Row>
      <Row></Row>
    </Container>
  );
}

export default App;
