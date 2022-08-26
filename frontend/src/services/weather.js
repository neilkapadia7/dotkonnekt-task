import axios from 'axios'

let baseurl = process.env.REACT_APP_NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL_LIVE : process.env.REACT_APP_BASE_URL_TEST
console.log('baseurl', baseurl)
export const addForecast = async (payload) => {
    try {
        const res = await axios.post(`${baseurl}api/forecast/add`, {cityName: payload})
        return res.data;
    } catch (err) {
        console.log(err)
        return err
    }
}

export const addCurrent = async (payload) => {
    try {
        console.log('process.env.REACT_APP_NODE_ENV', process.env.REACT_APP_NODE_ENV)
        const res = await axios.post(`${baseurl}api/weather/add`, {cityName: payload})
        return res.data;
    } catch (err) {
        console.log(err)
        return err
    }
}

export const getWeather = async (isForecast) => {
    try {
        const res = await axios.post(`${baseurl}api/get-forecast-weather`, {isForecast})
        return res.data;
    } catch (err) {
        console.log(err)
        return err
    }
}
