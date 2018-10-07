import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import LocationList from "../components/LocationList";
import * as actions from "../actions";
import { connect } from 'react-redux';
import {getCity, getWeatherCities} from './../reducers';

class LocationListContainer extends Component {

    componentDidMount() {

        const {setWeather, setSelectedCity, cities, city} = this.props;
        setWeather(cities);
        setSelectedCity(city);

    }

    handleSelectedLocation = city => {
        this.props.setSelectedCity(city);
    };

    render() {
        return (
            <LocationList
                cities={this.props.citiesWeather}
                onSelectedLocation={this.handleSelectedLocation}
            />
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};


const initMapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
// const initMapDispatchToProps = dispatch => ({
//     setSelectedCity: value=>dispatch(setSelectedCity(value)),
//     setWeather: cities => dispatch(setWeather(cities))
// });

const initMapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});

export default connect(initMapStateToProps, initMapDispatchToProps)(LocationListContainer);