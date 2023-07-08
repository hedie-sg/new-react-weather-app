import React, { useState, useEffect } from 'react';
import WeatherIcon from './WeatherIcon';
import axios from 'axios';
import './App.css';
import { cleanup } from '@testing-library/react';

export default function WeatherForcast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forcast, setForcast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props]);

    function handleResponse(response) {
        setForcast(response.data.daily);
        setLoaded(true);
    }
    function day(forcast) {
        let date = new Date(forcast.time * 1000);
        let day = date.getDay();

        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        return days[day];
    }

    if (loaded) {
        return (
            <div className="WeatherForcast">
                <div className="row">
                    {forcast.slice(0, 6).map((dailyForecast, index) => {
                        return (
                            <div className="col" key={index}>
                                <div className="forcast-day">
                                    {day(dailyForecast)}
                                </div>
                                <WeatherIcon
                                    code={dailyForecast.condition.icon}
                                    size={33}
                                />
                                <div className="forcast-temp">
                                    <span className="forcast-temp-max">
                                        {Math.round(
                                            dailyForecast.temperature.maximum
                                        )}
                                        °
                                    </span>
                                    <span className="forcast-temp-min">
                                        {Math.round(
                                            dailyForecast.temperature.minimum
                                        )}
                                        °
                                    </span>
                                </div>
                            </div>
                        );
                    })}
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
