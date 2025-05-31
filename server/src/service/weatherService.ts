import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object

// TODO: Define a class for the Weather object

// TODO: Complete the WeatherService class
class WeatherService {
async getlatlon(cityname:string){
//usetheurlfromline23,andgetthelatlonsomeonetypesin
console.log(process.env.API_KEY)
const respsone= await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=${process.env.API_KEY}`)

const data=await respsone.json()
const{lat,lon}=data[0]
console.log(lat,lon)
return{lat,lon}
}
async getfivedayforcast(lat:number,lon:number){
//usetheurlfromline24togettheactulweatherformthelatloncordenance 
const respsone= await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.API_KEY}`)

const data=await respsone.json()

//go through the data varible and only return the information that we need fro the weather
console.log(data,"this is data 26")
return data
}

async getweatehrforcity(cityName:string){
  const coordinates= await this.getlatlon(cityName)
  console.log(coordinates, "coordinates")
  const{lat,lon}=coordinates 
  const weather= await this.getfivedayforcast(lat,lon)
  console.log(weather,"this is the weather not returned")
  return weather
}
}

export default new WeatherService();
// http://api.openweathermap.org/geo/1.0/direct?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}