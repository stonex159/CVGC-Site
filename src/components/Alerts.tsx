import { useState } from "react";
import { Alert } from "react-bootstrap";

export function YellowAlert() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Warning: Yellow Mark Detected</Alert.Heading>
          <p>
            To change a yellow mark to a green mark you must have undergone testing for covid, 
            including the authorized covid shot(s). Please go to a UD Covid Testing facility to 
            be allowed into club and other UD facilities.

            Notice: after receiving the second shot, please wait 2 weeks for it to come into full affect.
          </p>
        </Alert>
      );
    }
  }
export function RedAlert() {
const [show, setShow] = useState(true);

if (show) {
    return (
    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Warning: Red Mark Detected</Alert.Heading>
        <p>
        To change a yellow mark to a green mark you must have undergone testing for covid, 
        including the authorized covid shot(s). Please go to a UD Covid Testing facility to 
        be allowed into club and other UD facilities.

        Notice: after receiving the second shot, please wait 2 weeks for it to come into full affect.
        </p>
    </Alert>
    )}
}