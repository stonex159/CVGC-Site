import { Alert } from "react-bootstrap";

export function AlertSelector(status: String){
    switch (status) {
        case "Yellow":
            yellowAlert();
            break;
        case "Red":
            redAlert();
            break;
    }

    function yellowAlert(): JSX.Element{
        return (
        <Alert variant="danger" dismissible>
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
    function redAlert(): JSX.Element{
        return (
        <Alert variant="danger" dismissible>
            <Alert.Heading>Warning: Red Mark Detected</Alert.Heading>
            <p>
                To be written.
            </p>
        </Alert>
    );}
}
