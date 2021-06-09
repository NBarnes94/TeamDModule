import React from 'react'

const TM = (props) =>{
    console.log(props);
    return(
        <div>
            {props.results.map(events => {
                return(
                    <div className="mainDiv" >
                        <div id='TmResult'>
                        <h3>{events.name}</h3>
                        <p>
                            Distance from you: {events.distance}
                            <br />
                            Start date(y/m/d) : {events.dates.start.localDate}
                        </p>
                        <a href={events.url}>Get Ticket</a>
                    </div>
                    </div>
                )
            }

            )}
        </div>
    )
}

export default TM;