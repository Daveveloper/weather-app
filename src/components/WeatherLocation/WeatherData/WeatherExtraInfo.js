import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weicontent">
        <span className="eitext">{`Humedad: ${humidity} %`}</span>
        <span className="eitext">{`Vientos: ${wind} m/s`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
};

export default WeatherExtraInfo;