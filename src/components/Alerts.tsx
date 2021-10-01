import { Alert } from "react-bootstrap";

export function AlertSelector({status}: {status: String}){
    //console.log("Alert entered")
    switch (status) {
        case "Yellow":
            //console.log("Yellow entered")
            return yellowAlert();
        case "Red":
            //console.log("Red entered")
            return redAlert();
        default:
            return greenAlert();
    }

    function yellowAlert(): JSX.Element{
        //console.log("Yellow executing")
        return (
        <Alert variant="danger" dismissible>
            <Alert.Heading>Warning: Yellow Mark Detected</Alert.Heading>
            <p>
            To change a yellow mark to a green mark you must have undergone testing for covid, 
            including the authorized covid shot(s). Please go to a UD Covid Testing facility to 
            be allowed into club and other UD facilities. 

            Please look <a href="https://www.udel.edu/home/coronavirus/testing/">here</a> for more information

            Notice: If you have had both shots but still have a yellow mark, please wait 2 weeks for the second shot to come into full affect.
            </p>
        </Alert>
        );
    }
    function redAlert(): JSX.Element{
        return (
        <Alert variant="danger" dismissible>
            <Alert.Heading>Warning: Red Mark Detected</Alert.Heading>
            <p>
                You are currently out of compliance with testing or have Covid. 
                Please contact Student Health Services ASAP: (302)-831-2226
            </p>
        </Alert>
    );}

    function greenAlert(): JSX.Element{
        return(
            <span></span>
        );
    }
}
