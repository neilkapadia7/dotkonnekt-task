const express = require('express')
const router = express.Router()
const Responder = require('@service/response')
const {checkWeather, addForecasts} = require('@controllers/index')

router.post('/weather/add',
checkWeather
);

router.post('/forecast/add',
addForecasts
);

router.post('/get-forecast-weather',
addForecasts
);

router.post('add-mapper',
addMapperData
);

router.post('get-mapper',
getMapperData
);

module.exports = router