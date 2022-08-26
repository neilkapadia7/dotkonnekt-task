import React, {useEffect, useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import {Row, Col, Dropdown, InputGroup, Form, Button} from 'react-bootstrap';
import Message from '../general/Message';
import Loader from '../general/Loader';
import Weather from './Weather'
import { useLocation } from 'react-router-dom';
import {addForecast, addCurrent, getWeather} from '../../services/weather'


const HomeScreen = (props) => {
    const [loading, setloading] = useState(false)
    const [selectVal, setSelectedVal] = useState('Select Weather Options')
    const [cityName, setCityName] = useState('')
    const [weatherData, setWeatherData] = useState(null)
    const [weatherLoading, setWeatherLoading] = useState(false)

    useEffect(() => {
      console.log('weatherData', weatherData)
    }, [weatherData])
    

    const checkWeather = async (e, isForecast) => {
      e.preventDefault()
      if(cityName === "") {
        setWeatherData(null)
        setWeatherLoading(false)
        return
      }
      setWeatherLoading(true)
      let data;
      if(isForecast) data = await addForecast(cityName) 
      else data = await addCurrent(cityName)
      setWeatherLoading(false)
      if(data.status) {
        setWeatherData(data.data)
      }
    }


    return (
      <>
        <h1 className='home-page-heading'>Weather</h1>
          {loading ? 
            (<Loader />) 
          : (
            <>
            <Dropdown>
              <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                {selectVal}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => {setSelectedVal('Current'); setWeatherData(null);}}>Current</Dropdown.Item>
                <Dropdown.Item onClick={() => {setSelectedVal('Forecast'); setWeatherData(null);}}>Forecast</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {selectVal !== 'Select Weather Options' &&
              <Form style={{marginTop: '50px'}} onSubmit={(e) => checkWeather(e, selectVal === 'Forecast' ? true : false)}>
                <InputGroup className="mb-5">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" onChange={(e) => setCityName(e.target.value)}/>
                    <Form.Text className="text-muted">
                      Add City to check Weather Data.
                    </Form.Text>
                  </Form.Group>
                  <Button variant="Secondary" type="submit">
                    Submit
                  </Button>
                </InputGroup>
              </Form>
            }
              <Row>
                {weatherData && 
                  <Col key={weatherData.id} sm={12} md={6} lg={4} xl={3}>
                      <Weather weather={weatherData} isForecast={selectVal === 'Forecast' ? true : false}/>
                    </Col>
                }
              </Row>
            </>
            )
          }
      </>
    )
}


export default HomeScreen
