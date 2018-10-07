import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

//Components
import Location from './Location';
import WeatherData from "./WeatherData";

//Assets
import './wlstyles.css';

//Clase
const WeatherLocation = ({onWeatherLocationClick, city, data}) => (
        <div className="wlcontent" onClick={onWeatherLocationClick}>
            <Location city={city}/>
            {(data)? <WeatherData data={data}/> : <CircularProgress size={50}/>}
        </div>
);

WeatherLocation.propTypes = {
    city : PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    }),
};

export default WeatherLocation;