import './navbar.scss'

import NavItem from '../NavItem/NavItem'
import { useTranslation } from 'react-i18next'
import { lang } from 'global/constants/appConstants'

const NavBar = ({ dummyData }) => {
    const { i18n } = useTranslation()

    function handleChangeLanguage(e) {
        const currentLang = i18n.language

        if (currentLang === lang.ENGLISH) {
            i18n.changeLanguage(lang.NEPALI)
        } else {
            i18n.changeLanguage(lang.ENGLISH)
        }
    }
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-menu">
                    {dummyData &&
                        dummyData.map((data, index) => (
                            <NavItem
                                key={index}
                                item={data.item}
                                type={data.type}
                                urlLink={data?.urlLink ? data.urlLink : null}
                                picture={data.picture}
                            />
                        ))}
                    <button
                        onClick={handleChangeLanguage}
                        className="language-button"
                    >
                        {i18n.language}
                    </button>
                </div>
            </div>
        </>
    )
}

export default NavBar
