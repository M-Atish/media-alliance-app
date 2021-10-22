import { lang as LANG } from 'global/constants/appConstants'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: LANG.ENGLISH,
        debug: process.env.NODE_ENV === 'production' ? false : true,
        defaultNS: 'common',
        ns: ['common'],
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        // load: 'currentOnly',
        detection: {
            order: ['queryString', 'cookie'],
            caches: ['cookie'],
        },
        backend: {
            // for all available options read the backend's repository readme file
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    })

export default i18n
