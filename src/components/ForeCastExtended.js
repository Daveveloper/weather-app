import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import './styles.css';
import transformForecast from './../services/transformForcast';
import ForecastItem from "./ForecastItem";

const api_key = "ad479127e1bfc43fb779e1beb855964f";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForeCastExtended extends Component{

    constructor(){
        super();
        this.state = {forecastData: null,}
    }

    updateCity = city =>{

        const url_forecast = `${url}?q=${city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data=>(data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                this.setState({forecastData});
            }
        );

    };

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }

    renderForecastItemsDays(forecastData){
        return forecastData.map(forecast => (
            <ForecastItem
                key={`${forecast.weekDay} ${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}/>
        ));
    }
    renderProgress(){
        return <LinearProgress/>
    }
    render(){
        const {city} = this.props;
        const {forecastData} = this.state;
        return(
            <div className='forecastContent'>
                <h2  className='forecastTitle'>
                    <Typography variant={"display2"} color={"primary"}>{city}</Typography>
                </h2>
                {forecastData ?
                    this.renderForecastItemsDays(forecastData) :
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForeCastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};

export default ForeCastExtended;

