import React, { useState } from 'react';
import { Input, FormGroup, Label, Form, Button } from 'reactstrap';
import Tm from '../TM/TM';
// import FetchNasa from '../Nasa/Nasa';



const LatLon = (props) => {
    console.log(props);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [toggle, setToggle] = useState('F');
    const [tmresults, setTmResults] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const [ wresults, setwResults ] = useState ([])

    const fetchTMResults = () => {
        let url = `https://app.ticketmaster.com/discovery/v2/events?apikey=eDb4BQQtXjPJwP2mdVa6eLtiQBnqU0Os&latlong=${latitude},${longitude}&locale=*`;

        fetch(url)
            .then(res => res.json())
            .then(data => setTmResults(data._embedded.events.slice(0,5)))
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
        //const buttonToggle = () => {
        // if (toggle === F) {
        //     setToggle(false) 
        // } else {
        //     setToggle(true)
        // }

        // }
            if (toggle === 'F'){

            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=ef95820d99075603502e768fc43ff866`

                                fetch(url)
            .then(res => res.json())
            .then(data => setwResults(data.main.temp))
            .catch(err => console.log(err)); 

             } else
             {
                  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=ef95820d99075603502e768fc43ff866`
                  fetch(url)
                  .then(res => res.json())
                  .then(data => setwResults(data.main.temp))
                  .catch(err => console.log(err)); 

            }  
        
            /*fetch(url)
            .then(res => res.json())
            .then(data => setwResults(data.main.temp))
            .catch(err => console.log(err)); */
        
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
            
                <Label htmlFor="submit" ><h1 className='div'>Current temperature: {wresults}°</h1></Label>
                        <Input id="tempType" type="select" name="definition" value={
                            
                            
                            toggle} onChange={(e) => setToggle(e.target.value)}>
                        {/* </Input><option></option> */}
                            <option value="F">Fahrenheit</option>
                            <option value="C">Celsius</option>
                        </Input>

                <Button className='submit'>Show me local details</Button>
                
            </Form>
            <div className='display'>
            {/* {
                
            } */}
            {
                tmresults.length >0? 
                <Tm results={tmresults}/> 
                : null
            }
            {
                imageUrl ? <img className="div" id="photo" className="mainDiv row col" src={imageUrl} alt="Location"></img> : null
            }
            </div>
            </div>
    )
}

export default LatLon;