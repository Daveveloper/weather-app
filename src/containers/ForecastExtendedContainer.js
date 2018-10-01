import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForeCastExtended from "./../components/ForeCastExtended";
import {connect} from 'react-redux';


class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props.city && <ForeCastExtended city={this.props.city}/>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};

const initMapStateToProps = ({city}) => ({city});

export default connect(initMapStateToProps, null)(ForecastExtendedContainer);