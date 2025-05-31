import { Router } from 'express';
const router = Router();

// import HistoryService from '../../service/historyService.js';
 import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', (req, _res) => {
  // TODO: GET weather data from city name
  // get city to search from req body and search it from our api
  const{cityName}=req.body
  console.log(cityName)
  WeatherService.getweatehrforcity(cityName).then((forecast)=>{
    console.log(forecast,"line12 weatherroutes")
    _res.json(forecast)
  }  )
  


  // TODO: save city to search history
});

// TODO: GET search history
router.get('/history', async (_req, _res) => {});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (_req, _res) => {});

export default router;


