import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import {
    RAIN,
    CLOUD,
    SUN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from "../../../constants/weathers";

const icons = {
    [CLOUD] : "cloud",
    [SUN] : "day-sunny",
    [RAIN] : "rain",
    [SNOW] : "snow",
    [THUNDER] : "day-thunderstorm",
    [DRIZZLE] : "day-showers",
};

const getWeatherIcon = weatherState =>{
    const sizeIcon = "3x";
    const icon = icons[weatherState];
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>;
    else
        return <WeatherIcons className="wicon" name={'day-sunny'} size={sizeIcon}/>;
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="wtcontent">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temp">{` ${temperature}° `}</span>
        <span className="temptype">{`C.`}</span>
    </div>
);

WeatherTemperature.propTypes={
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;