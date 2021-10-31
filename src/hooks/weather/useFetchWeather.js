import { endpoints } from 'global/endpoints'
import http from 'utils/http'
import { useQuery } from 'react-query'

const fetchWeather = (apiKey) => {
    return http('json', 'http://api.openweathermap.org/', 20000).get(
        endpoints.weather.base.replace('{API_key}', apiKey)
    )
}

export default function useFetchWeather(WEATHER_API_KEY) {
    return useQuery(['fetchWeather', WEATHER_API_KEY], () =>
        fetchWeather(WEATHER_API_KEY)
    )
}
