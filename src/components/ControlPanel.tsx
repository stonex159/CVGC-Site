import { Button, Col, Dropdown } from 'react-bootstrap';
import 'member.ts';

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
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Checkmark Status
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/Red">Red</Dropdown.Item>
                    <Dropdown.Item href="#/Yellow">Yellow</Dropdown.Item>
                    <Dropdown.Item href="#/Green">Green</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <br></br>
        </form>
    </div>
        

    <Button id="submit-button"> submit </Button>
    </Col>
}