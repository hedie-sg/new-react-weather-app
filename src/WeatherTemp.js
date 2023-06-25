import React, { useState } from 'react';
import './App.css';

export default function WeatherTemp(props) {
    const [unit, setUnit] = useState('celsius');
    function convertFahrenheit(event) {
        event.preventDefault();
        setUnit('fahrenheit');
    }
    function convertCelsius(event) {
        event.preventDefault();
        setUnit('celsius');
    }
    if (unit === 'celsius') {
        return (
            <span className="WeatherTemp">
                <span className="temperature">{props.celsius}</span>
                <span className="unit">
                    °C |{' '}
                    <a href="/" on onClick={convertFahrenheit}>
                        °F
                    </a>
                </span>
            </span>
        );
    } else {
        let fahrenheit = (props.celsius * 9) / 5 + 32;
        return (
            <span className="WeatherTemp">
                <span className="temperature">{Math.round(fahrenheit)}</span>
                <span className="unit">
                    <a href="/" on onClick={convertCelsius}>
                        °C
                    </a>{' '}
                    | °F
                </span>
            </span>
        );
    }
}
