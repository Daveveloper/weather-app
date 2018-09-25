import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from "../WeatherLocation/WeatherData";

const capitalize = word => (
   word.charAt(0).toUpperCase() + word.substr(1)
);

const ForecastItem = ({ weekDay, hour, data }) => (
        <div>
            <div>
                <strong>{capitalize(weekDay)} {hour} hs.</strong>
            </div>
            <div>
                <WeatherData data={data}/>
            </div>
        </div>
);

ForecastItem.propTypes = {
    weekDay : PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    }),
};

export default ForecastItem;