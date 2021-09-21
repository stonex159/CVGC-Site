import React from 'react';
import {Member} from './interfaces/member'
import './App.css';
import { hasUncaughtExceptionCaptureCallback } from 'process';
import { MemberList } from './components/MemberList';
import { ControlPanel } from './components/ControlPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
function App(): JSX.Element {
  return (
    <Container className="App">
      <div>
        <ControlPanel></ControlPanel>
      </div>
      <div>
        <MemberList></MemberList>
      </div>
    </Container>
  );
}

export default App;
