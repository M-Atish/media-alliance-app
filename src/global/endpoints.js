export const endpoints = {
    news: {
        base: 'v1/news',
        details: 'v1/news/{id}',
        paginate: 'v1/news?page_size={pageSize}&orderBy=id',
    },
    videos: {
        base: 'v1/videos',
        details: 'v1/videos/{id}',
    },
    horoscopes: {
        base: 'v1/horoscopes',
    },
}
