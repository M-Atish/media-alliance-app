import { useQuery } from 'react-query'

import { endpoints } from 'global/endpoints'
import http from 'utils/http'

const fetchVideos = () => {
    return http().get(endpoints.videos.base)
}

export function useFetchVideos() {
    return useQuery(['fetchVideos'], () => fetchVideos())
}
