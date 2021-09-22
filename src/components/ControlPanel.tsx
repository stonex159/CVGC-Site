import { Button, Col } from 'react-bootstrap';
import 'member.tsx';

export function ControlPanel(): JSX.Element {
    return <Col>
    <div>
        <form>
            <label>First Name:
                <input className="textbox" type="text" name="First Name" placeholder="Joe"></input> 
            </label>
            <br></br>

            <label>Last Name:
                <input className="textbox" type="text" name="Last Name" placeholder="Jones"></input>
            </label>
            <br></br>

            <label>Email Address:
                <input className="textbox" type="email" name="Email Address" placeholder="Jjones@udel.edu"></input>
            </label>
            <br></br>
            <label>Health Check Status:
                <input className="textbox" type="text" name="Health Check Status"></input>
            </label>
            <br></br>
        </form>
    </div>
        

    <Button id="submit-button"> submit </Button>
    </Col>
}