import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';

//Servicios
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';

//Components
import Location from './Location';
import WeatherData from "./WeatherData";

//Assets
import './wlstyles.css';


//Clase
class WeatherLocation extends Component {
    constructor(props){
        super(props);
        const {city} = props;
        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
    }

    handleUpdateClick = ()=> {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {
            return resolve.json();

        }).then( data => {
            console.log(data);
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather,
            });
        });
    };

    render(){
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;
        return(
            <div className="wlcontent" onClick={onWeatherLocationClick}>
                <Location city={city}/>
                {
                    (data)?
                        //true
                        <WeatherData data={data}/> :
                        //false
                        <CircularProgress size={50}/>
                }
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city : PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
};

export default WeatherLocation;