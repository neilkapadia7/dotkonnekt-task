import React from 'react'
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Weather = ({weather, isForecast}) => {
    return (
        <Table striped bordered hover>
            {isForecast ? 
                (   
                <>
                    <thead>
                        <tr>
                        <th>Sunrise</th>
                        <th>Sunset</th>
                        <th>Moonrise</th>
                        <th>Moonset</th>
                        <th>Moon Phase</th>
                        <th>Moon Illumination</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{weather.sunrise}</td>
                        <td>{weather.sunset}</td>
                        <td>{weather.moonrise}</td>
                        <td>{weather.moonset}</td>
                        <td>{weather.moon_phase}</td>
                        <td>{weather.moon_illumination}</td>
                        </tr>
                    </tbody>
                    </>
                ) :
                (
                    <>
                        <thead>
                            <tr>
                            <th>City Name</th>
                            <th>Region</th>
                            <th>Country</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                            <th>Time Zone</th>
                            <th>Localtime Epoch</th>
                            <th>Localtime</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>{weather.name}</td>
                            <td>{weather.region}</td>
                            <td>{weather.country}</td>
                            <td>{weather.lat}</td>
                            <td>{weather.lon}</td>
                            <td>{weather.tz_id}</td>
                            <td>{weather.localtime_epoch}</td>
                            <td>{weather.localtime}</td>
                            </tr>
                        </tbody>
                    </>
                )
            }
        </Table>
    )
}

export default Weather
