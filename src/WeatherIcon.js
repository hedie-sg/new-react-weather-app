import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import './App.css';

export default function WeatherIcon(props) {
    const codeMapping = {
        'clear-sky-day': 'CLEARE_DaY',
        'clear-sky-night': 'CLEAR_NIGHT',
        'few-clouds-day': 'PARTLY_CLOUDY_DAY',
        'few-clouds-night': 'PARTLY_CLOUDY_NIGHT',
        'scattered-clouds-day': 'PARTLY_CLOUDY_DAY',
        'scattered-clouds-night': 'PARTLY_CLOUDY_DAY',
        'broken-clouds-day': 'CLOUDY',
        'broken-clouds-night': 'CLOUDY',
        'rain-day': 'RAIN',
        'rain-night': 'RAIN',
        'shower-rain-day': 'SLEET',
        'shower-rain-night': 'SLEET',
        'thunderstorm-day': 'WIND',
        'thunderstorm-night': 'WIND',
        'snow-day': 'SNOW',
        'snow-night': 'SNOW',
        'mist-day': 'FOG',
        'mist-night': 'FOG',
    };

    return (
        <ReactAnimatedWeather
            icon={codeMapping[props.code]}
            color="rgb(128, 33, 131)"
            size={50}
            animate={true}
        />
    );
}
