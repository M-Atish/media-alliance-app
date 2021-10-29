import { useQuery } from 'react-query'

import { endpoints } from 'global/endpoints'
import http from 'utils/http'

const fetchNewsPaginate = (paginateNumber) => {
    return http().get(
        endpoints.news.paginate.replace('{pageSize}', paginateNumber)
    )
}

export function useFetchNewsPaginate(paginateNumber) {
    return useQuery(['fetchNewsPaginate', paginateNumber], () =>
        fetchNewsPaginate(paginateNumber)
    )
}
