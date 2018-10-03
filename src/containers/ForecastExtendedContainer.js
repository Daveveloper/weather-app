import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForeCastExtended from "./../components/ForeCastExtended";
import {connect} from 'react-redux';
import {getForecastDataFromCities, getCity} from "../reducers";


class ForecastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props;
        return (
            city &&
            <ForeCastExtended city={city} forecastData={forecastData}/>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

const initMapStateToProps = state => ({city: getCity(state) , forecastData: getForecastDataFromCities(state) });

export default connect(initMapStateToProps, null)(ForecastExtendedContainer);