import transformForecast from "../services/transformForcast";
import getUrlWeatherByCity from "../services/getUrlWeatherByCity";
import transformWeather from "../services/transformWeather";

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({type: SET_CITY, payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';

const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});
const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});

const api_key = "ad479127e1bfc43fb779e1beb855964f";
const url = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload=> {
    return (dispatch, getState) => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        //Activar en el estado un indicador de busqueda.
        dispatch(setCity(payload));
        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDate;
        const now = new Date();

        if(date && (now - date) < 60 * 1000){
            return;
        }
        return fetch(url_forecast).then(
            data=>(data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                //Se modifica el estado con el resultado del promise. (fetch)
                dispatch(setForecastData({city: payload, forecastData}));
            }
        );
    }
};

export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));
            const api_weather = getUrlWeatherByCity(city);
            fetch(api_weather).then(resolve => {
                return resolve.json();
            }).then(data => {
                const weather = transformWeather(data);
                dispatch(setWeatherCity({city, weather}))
            });

        });
    }
};