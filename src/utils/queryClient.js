import { QueryClient } from 'react-query'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 2,
            refetchOnWindowFocus: false,
            onError: (errorData) => {
                console.log(errorData)
            },
        },
        mutations: {
            onError: (errorData) => {
                console.log(errorData)
            },
            onSuccess: (data) => {},
        },
    },
})
