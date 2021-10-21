import { useQuery } from 'react-query'

import { endpoints } from 'global/endpoints'
import http from 'utils/http'

const fetchNewsViaId = (id) => {
    return http().get(endpoints.news.details.replace('{id}', id))
}

export function useFetchNewsViaId(id) {
    return useQuery(['fetchNewsViaId', id], () => fetchNewsViaId(id))
}
