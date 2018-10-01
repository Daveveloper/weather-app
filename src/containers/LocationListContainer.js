import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LocationList from "../components/LocationList";
import {setCity} from "../actions";
import { connect } from 'react-redux';

class LocationListContainer extends Component {

    handleSelectedLocation = city => {
        this.props.dispatchSetCity(city);
    };

    render() {
        return (
            <LocationList
                cities={this.props.cities}
                onSelectedLocation={this.handleSelectedLocation}
            />
        );
    }
}

LocationListContainer.propTypes = {
    dispatchSetCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
};

const initMapDispatchToProps = dispatch => ({
    dispatchSetCity: value=>dispatch(setCity(value))
});


export default connect(null, initMapDispatchToProps)(LocationListContainer);