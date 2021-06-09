import React, {useState} from 'react';
//import WeatherResults from './WeatherResults';
import { Input, FormGroup, Label, Form, Button } from 'reactstrap';

/*optional callback function
api.openweathermap.org/data/2.5/onecall?lat=38.8&lon=12.09&callback=test
*/

const TempCurrent = (props) => {
console.log(props);
const [ latitude, setLatitude ] = useState ('');
const [ longitude, setLongitude ] = useState ('');
const [ wresults, setwResults ] = useState ([])

const fetchTemp = () => {

    // if (toggleF === true){
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=ef95820d99075603502e768fc43ff866`
    // }else{
    //     (toggleC === true) {
    //         let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=ef95820d99075603502e768fc43ff866`}
    // }  
    /* let url = `https://api.openweathermap.org/data/2.5/onecall?lat=86&lon=33&units=imperial&exclude=minutely,hourly,daily,alerts&appid=ef95820d99075603502e768fc43ff866`;*/

    fetch(url)
    .then(res => res.json())
    .then(data => setwResults(data.main.temp))
    .catch(err => console.log(err)); 

};

const handleSubmit = (event) => {
    event.preventDefault();
    fetchTemp();
    }
/*toggleOnSubmit
    if F = true  .then C 

    update on/off from workout log*/

    return(  <div className='searchFunction'>
    <Form onSubmit={(e) => handleSubmit(e)}>
        <FormGroup>
            <Label>Latitude</Label>
            <Input type='text' name='latitude' onChange={(e) => setLatitude(e.target.value)} required />
        </FormGroup>
        <FormGroup>
            <Label>Longitude</Label>
            <Input type='text' name='longitude' onChange={(e) => setLongitude(e.target.value)} required />
        </FormGroup>
        <Button className='submit'>What is happening here?</Button>
    </Form>
    {
      //<WeatherResults  results = {wresults} /> 
      <h3>{wresults}</h3>


      } 

            </div>
                )

};


export default TempCurrent;
