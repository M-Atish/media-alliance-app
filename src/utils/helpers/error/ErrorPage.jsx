import './errorPage.scss'

import { useTranslation } from 'react-i18next'

const ErrorPage = () => {
    const { t } = useTranslation()

    return (
        <div className="warning-message">
            <p>{t('unidentifiedUrl')}</p>
        </div>
    )
}

export default ErrorPage
