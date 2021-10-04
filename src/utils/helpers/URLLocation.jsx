import { useLocation } from 'react-router-dom'

export function useParamsQuery() {
    return new URLSearchParams(useLocation().search)
}
