import React, { useState } from 'react';
import { Input, FormGroup, Label, Form, Button } from 'reactstrap';
import Tm from '../TM/TM';
// import FetchNasa from '../Nasa/Nasa';



const LatLon = (props) => {
    console.log(props);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('')
    const [tmresults, setTmResults] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const [ wresults, setwResults ] = useState ([])

    const fetchTMResults = () => {
        let url = `https://app.ticketmaster.com/discovery/v2/events?apikey=eDb4BQQtXjPJwP2mdVa6eLtiQBnqU0Os&latlong=${latitude},${longitude}&locale=*`;

        fetch(url)
            .then(res => res.json())
            .then(data => setTmResults(data._embedded.events))
            .catch(err => console.log(err));
            // console.log(data);
    };

    const fetchNasaResults = () =>{
        const key='GoQCbRk7g8Y58M14bxLYOvKbEefbe2d6DcqvI9u9';
        const url = `https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&api_key=${key}`;
        
        fetch(url)
        .then(response => response.json())
        .then(json => setImageUrl(json.url))
        .catch(err => console.log(err))
    };
        
    const fetchTemp = () => {
        
            // if (toggleF === true){
                let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=ef95820d99075603502e768fc43ff866`
            // }else
            //     (toggleC === true) {
            //         let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=ef95820d99075603502e768fc43ff866`
            // }  
        
            fetch(url)
            .then(res => res.json())
            .then(data => setwResults(data.main.temp))
            .catch(err => console.log(err)); 
        
        };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchTMResults();
        fetchNasaResults();
        fetchTemp();
    };

    return (
        <div className='searchFunction'>
            <Form className="formDiv" onSubmit={(e) => handleSubmit(e)}>
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
                <h3>{wresults}</h3>
            }
            {
                tmresults.length >0? <Tm results={tmresults}/> : null
            }
            {
                // <FetchNasa results={imageUrl} />
                // <div class="row">
                <img id="photo" className="mainDiv row col" src={imageUrl} alt="Location"></img>
                // </div>
            }
            </div>
    )
}

export default LatLon;