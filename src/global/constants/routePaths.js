export const routePaths = {
    // First time
    // authentication: '/',
    language: '/',
    interestTopics: '/interested-topics',

    // After first time
    dashboard: '/',
    news: {
        base: '/news',
        moduleSubCategory:
            '/news?module={moduleName}&sub-category={subCategoryName}',
        details: '/news/details?id={idNumber}',
    },
    forex: '/forex',
    shareCalculator: '/share-calculator',
    shareMarket: '/share-market',
    calendar: '/calendar',
    dateConverter: '/date-converter',
    gold: '/gold',
    unicode: '/unicode',
    emiCalculator: '/emi-calculator',
}
