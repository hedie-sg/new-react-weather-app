import React from 'react';
import WeatherIcon from './WeatherIcon';
import axios from 'axios';
import './App.css';

export default function WeatherForcast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }
    console.log(props);
    let apiKey = '2o0f65b4a41b4138505bc7t3f2fa0460';
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForcast">
            <div className="row">
                <div className="col">
                    <div className="forcast-day">Thu</div>
                    <WeatherIcon code="snow-night" size={33} />
                    <div className="forcast-temp">
                        <span className="forcast-temp-max">15°</span>
                        <span className="forcast-temp-min">10°</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
