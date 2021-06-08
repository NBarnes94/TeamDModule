import React, { useState } from 'react';
import { Input, FormGroup, Label, Form, Button } from 'reactstrap';
import Tm from '../TM/TM';



const LatLon = (props) => {
    console.log(props);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('')
    const [tmresults, setTmResults] = useState([]);


    const fetchTMResults = () => {
        let url = `https://app.ticketmaster.com/discovery/v2/events?apikey=eDb4BQQtXjPJwP2mdVa6eLtiQBnqU0Os&latlong=${latitude},${longitude}&locale=*`;

        fetch(url)
            .then(res => res.json())
            .then(data => setTmResults(data._embedded.events))
            .catch(err => console.log(err));
            // console.log(data);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchTMResults();
    };

    return (
        <div className='searchFunction'>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <FormGroup>
                    <Label>Latitude</Label>
                    <Input type='text' name="latitude" onChange={(e) => setLatitude(e.target.value)} required />
                </FormGroup>
                <FormGroup>
                    <Label>Longitude</Label>
                    <Input type='text' name='longitude' onChange={(e) => setLongitude(e.target.value)} required />
                </FormGroup>
                <Button className='submit'>What is happening here?</Button>
            </Form>
            {
                tmresults.length >0? <Tm results={tmresults}/> : null
            }
        </div>
    )
}

export default LatLon;