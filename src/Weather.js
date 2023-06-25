import React, { useState } from 'react';
import FormattedDate from './FormattedDate';
import axios from 'axios';
import './App.css';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ redy: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            city: response.data.city,
            date: new Date(response.data.time * 1000),
            temperature: Math.round(response.data.temperature.current),
            description: response.data.condition.description,
            humidity: Math.round(response.data.temperature.humidity),
            wind: Math.round(response.data.wind.speed),
            icon: response.data.condition.icon_url,
        });
    }
    function search() {
        let unit = 'metric';
        const apiKey = '2o0f65b4a41b4138505bc7t3f2fa0460';
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function handleCityChange(event) {
        setCity(event.target.value);
    }
    if (weatherData.ready) {
        return (
            <div className="weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input
                                type="search"
                                placeholder="Enter a city..."
                                className="form-control"
                                onChange={handleCityChange}
                            />
                        </div>
                        <div className="col-3">
                            <input
                                type="submit"
                                value="Search"
                                className="btn btn-primary w-100"
                            />
                        </div>
                    </div>
                </form>

                <h1 className="city">{weatherData.city}</h1>
                <div className="row mt-3 mb-3">
                    <div className="col-6">
                        <ul>
                            <li className="text-capitalize">
                                <FormattedDate date={weatherData.date} />
                            </li>
                            <li className="text-capitalize">
                                <span className="description ">
                                    {weatherData.description}
                                </span>
                            </li>
                            <li>
                                Humidity:{' '}
                                <span className="humidity">
                                    {weatherData.humidity}%
                                </span>
                            </li>
                            <li>
                                Wind:{' '}
                                <span className="wind">
                                    {weatherData.wind}km/h
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <img
                            src={weatherData.icon}
                            alt=" Mostly cloudy"
                            className="icon"
                        />
                        <span className="temperature">
                            {weatherData.temperature}
                        </span>
                        <span className="unit">
                            <a href="/">°C</a> | <a href="/">°F</a>
                        </span>
                    </div>
                </div>
            </div>
        );
    } else {
        search();
        return 'loading..';
    }
}
