import { useQuery } from 'react-query'

import { endpoints } from 'global/endpoints'
import http from 'utils/http'

const fetchHoroscopes = () => {
    return http().get(endpoints.horoscopes.base)
}

export function useFetchHoroscopes() {
    return useQuery(['fetchHoroscopes'], () => fetchHoroscopes())
}
