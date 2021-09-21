import { Button, Col } from 'react-bootstrap'

export function ControlPanel(): JSX.Element {
    return <Col>
    <p>First Name:
    <input className="textbox" type="text" name="First Name" placeholder="Joe"></input> 
    </p>
    <br></br>

    <p>Last Name:
    <input className="textbox" type="text" name="Last Name" placeholder="Jones"></input>
    </p>
    <br></br>

    <p>Email Address:
    <input className="textbox" type="email" name="Email Address" placeholder="Jjones@udel.edu"></input>
    </p>
    <br></br>

    <p>Health Check: 
    <input className="checkbox" type="checkbox" name="Health Check"></input>
    </p>
    <br></br>

    <Button id="submit-button"> submit </Button>
    </Col>
}