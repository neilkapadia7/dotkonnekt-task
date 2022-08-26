const Weathers = require('@models/weather')
const Forecasts = require('@models/forecast')
const Responder = require('@service/response')
const axios = require('axios')
var url = require('url');

/**
    @route POST api/weather/add
    @description get current weather
*/ 
module.exports = {
    async checkWeather(req, res) {
        try {
            let city = req.body.cityName;
            let URL = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=no`
            let weatherAPI = await axios.get(`${URL}`);
            var url_parts = url.parse(URL, true);
            if(weatherAPI && weatherAPI.status === 200) {
                let newWeather = await new Weathers({
                    name: weatherAPI.data?.location?.name,
                    region: weatherAPI.data?.location?.region,
                    country: weatherAPI.data?.location?.country,
                    lat: weatherAPI.data?.location?.lat,
                    lon: weatherAPI.data?.location?.lon ,
                    tz_id: weatherAPI.data?.location?.tz_id,
                    localtime_epoch: weatherAPI.data?.location?.localtime_epoch,
                    localtime: weatherAPI.data?.location?.localtime ? new Date(weatherAPI.data?.location?.localtime) : undefined,
                    host: url_parts.host,
                    pathname: url_parts.pathname,
                    query: url_parts.query

                }).save()

                return Responder.respondWithSuccess(req, res, newWeather, 'Successfully Added');    
            } 

            return Responder.respondWithSuccess(req, res, [] , 'No Response');    
        }
        catch(err) {
            console.log(err)
            return Responder.respondWithError(req, res, 'Error')
        }
    },

/**
    @route POST api/forecast/add
    @description Check Forecast by 1 day
*/ 
    async addForecasts (req, res) {  
        try {
            let city = req.body.cityName;
            let URL = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
            let checkForecast = await axios.get(`${URL}`);
            console.log('checkForecast.data', checkForecast.data)
            var url_parts = url.parse(URL, true);
            if(checkForecast.status === 200) {
                let newForecast = await new Forecasts({
                    sunrise: checkForecast.data?.forecast?.forecastday[0].astro.sunrise,
                    sunset: checkForecast.data?.forecast?.forecastday[0].astro.sunset,
                    moonrise: checkForecast.data?.forecast?.forecastday[0].astro.moonrise,
                    moonset: checkForecast.data?.forecast?.forecastday[0].astro.moonset,
                    moon_phase: checkForecast.data?.forecast?.forecastday[0].astro.moon_phase ,
                    moon_illumination: checkForecast.data?.forecast?.forecastday[0].astro.moon_illumination,
                    host: url_parts.host,
                    pathname: url_parts.pathname,
                    query: url_parts.query
                }).save()
                return Responder.respondWithSuccess(req, res, newForecast , 'Successfully Added');    
            } 

            return Responder.respondWithSuccess(req, res, [] , 'No Response');    
        }
        catch(err) {
            console.log(err)
            return Responder.respondWithError(req, res, 'Error')
        }
    },
/**
    @route POST api/get-forecast-weather
    @description get forecast and weather
*/ 
    async getWeatherAndForeCast(req, res) {
        try {
            let isForecast = req.body.isForecast;
            let result;
            if(isForecast)
                result = await Forecasts.find({})
            else
                result = await Weathers.find({})

            return Responder.respondWithSuccess(req, res, result, 'Successfully Fetched!');    
        }
        catch(err) {
            console.log(err)
            return Responder.respondWithError(req, res, 'Error')
        }
    },

}
