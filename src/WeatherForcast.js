import React, { useState } from 'react';
import WeatherIcon from './WeatherIcon';
import axios from 'axios';
import './App.css';

export default function WeatherForcast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forcast, setForcast] = useState(null);

    function handleResponse(response) {
        setForcast(response.data.daily);
        setLoaded(true);
    }
    function day() {
        let date = new Date(forcast[0].time * 1000);
        let day = date.getDay();

        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        return days[day];
    }

    if (loaded) {
        console.log(forcast);
        return (
            <div className="WeatherForcast">
                <div className="row">
                    <div className="col">
                        <div className="forcast-day">{day()}</div>
                        <WeatherIcon
                            code={forcast[0].condition.icon}
                            size={33}
                        />
                        <div className="forcast-temp">
                            <span className="forcast-temp-max">
                                {Math.round(forcast[0].temperature.maximum)}°
                            </span>
                            <span className="forcast-temp-min">
                                {Math.round(forcast[0].temperature.minimum)}°
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        let apiKey = '2o0f65b4a41b4138505bc7t3f2fa0460';
        let city = props.city;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
        return null;
    }
}
