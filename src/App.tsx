import React from 'react';
import {member} from './interfaces/member'
import './App.css';
import { hasUncaughtExceptionCaptureCallback } from 'process';
import { MemberList } from './components/MemberList';

function App(): JSX.Element {
  return (
    <div className="App">
      <div>
        <MemberList></MemberList>
      </div>
    </div>
  );
}

export default App;
