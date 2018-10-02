import transformForecast from "../services/transformForcast";

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => (
    {type: SET_CITY, payload}
);

const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

const api_key = "ad479127e1bfc43fb779e1beb855964f";
const url = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload=> {
    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        //Activar en el estado un indicador de busqueda.
        dispatch(setCity(payload));

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
    };
};