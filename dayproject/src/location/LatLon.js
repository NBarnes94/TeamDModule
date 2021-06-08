import React from 'react';
import {Input,FormGroup, Label, Form, Button} from 'reactstrap';



const LatLon = (props) =>{
    return(
        <Form>
            <FormGroup>
                <Label>Longitude</Label>
                <Input />
            </FormGroup>
            <FormGroup>
                <Label>Latitude</Label>
                <Input />
            </FormGroup>
            <Button>What is happening here?</Button>
        </Form>
    )
}

export default LatLon;