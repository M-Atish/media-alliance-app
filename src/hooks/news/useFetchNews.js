import { useQuery } from 'react-query'

import { endpoints } from 'global/endpoints'
import http from 'utils/http'

const fetchNews = () => {
    return http().get(endpoints.news.base)
}

export function useFetchNews() {
    return useQuery(['fetchNews'], () => fetchNews())
}
