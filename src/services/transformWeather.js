import convert from "convert-units/lib";
import {
    RAIN,
    CLOUD,
    SUN,
    SNOW,
    THUNDER,
    DRIZZLE,
    LIGHTRAIN
} from "../constants/weathers";

const getTemp = (kelvin) => {
    return convert(kelvin).from("K").to("C").toFixed(0);
};

const getWeatherState = (weather) => {
    const {id} = weather;
    if(id < 300){
        return THUNDER;
    }else if(id < 500){
        return DRIZZLE;
    }else if(id < 600){
        if(id===500){
            return LIGHTRAIN;
        }
        return RAIN;
    }else if(id < 700){
        return SNOW;
    }else if(id === 800){
        return SUN;
    }else{
        return CLOUD;
    }
};

const transformWeather = weather_data => {
    const {humidity, temp} = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperature = Number(getTemp(temp));

    const data = {
        humidity,
        temperature,
        weatherState,
        wind:speed,
    };

    return data;
};

export default transformWeather;