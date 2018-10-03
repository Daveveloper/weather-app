import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import './styles.css';
import ForecastItem from "./ForecastItem";

const renderForecastItemsDays = (forecastData)=> {
    return forecastData.map(forecast => (
        <ForecastItem
            key={`${forecast.weekDay} ${forecast.hour}`}
            weekDay={forecast.weekDay}
            hour={forecast.hour}
            data={forecast.data}/>
    ));
};
const renderProgress = () => {
    return <LinearProgress/>
};

const ForeCastExtended = ({ city, forecastData }) => (

    <div className='forecastContent'>
        <h1  className='forecastTitle'>
            {city}
        </h1>
        {forecastData ?
            renderForecastItemsDays(forecastData) :
            renderProgress()
        }
    </div>

);

ForeCastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

export default ForeCastExtended;

