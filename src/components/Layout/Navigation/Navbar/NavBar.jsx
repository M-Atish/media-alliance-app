import './navbar.scss'

import { useState, useEffect, useRef } from 'react'

import { BsKeyboard, BsGlobe2 } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { IoHome } from 'react-icons/io5'

import {
    logoImg,
    locationTagImg,
    weatherTagImg,
    degreeTagImg,
    searchBarIconImg,
} from 'assets'

import NavItem from '../NavItem/NavItem'
import { useTranslation } from 'react-i18next'
import { lang } from 'global/constants/appConstants'
import classNames from 'classnames'
import useMediaQuery from 'hooks/mediaQuery/useMediaQuery'
import { NavLink } from 'react-router-dom'

const NAV_ITEM_WIDTH = 170

const NavBar = ({ dummyData }) => {
    const [totalNavItems, setTotalNavItems] = useState(9)
    const [toggleNav, setToggleNav] = useState(false)
    const [scrolledNavBar, setScrolledNavBar] = useState(false)

    const navBarMenuRef = useRef(null)

    const { i18n } = useTranslation()

    const isNavbar = useMediaQuery('(min-width: 768px)')

    const { t } = useTranslation()

    // This is for the toLocaleDateString converter. Remove this section once the API comes.
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }

    useEffect(() => {
        setToggleNav(false)
    }, [isNavbar])

    // This is for the proper reassigning of the values in the navbar when resized
    useEffect(() => {
        if (navBarMenuRef.current) {
            const navBarMenuWidth =
                navBarMenuRef.current.getBoundingClientRect().width

            setTotalNavItems(navBarMenuWidth / NAV_ITEM_WIDTH)
        }

        const resizeListener = () => {
            if (navBarMenuRef.current) {
                const navBarMenuWidth =
                    navBarMenuRef.current.getBoundingClientRect().width

                setTotalNavItems(navBarMenuWidth / NAV_ITEM_WIDTH)
            }
        }

        window.addEventListener('resize', resizeListener)

        return () => {
            window.removeEventListener('resize', resizeListener)
        }
    }, [])

    useEffect(() => {
        // This is for the changing navbar when scrolled
        const changeBackground = () => {
            const windowScrollYValue = window.scrollY
            console.log('windowScrollvalue', windowScrollYValue)
            if (windowScrollYValue >= 92) {
                setScrolledNavBar(true)
            } else {
                setScrolledNavBar(false)
            }
        }
        changeBackground()
        window.addEventListener('scroll', changeBackground)
    }, [])

    // This is for changing the language into English or Nepali, depending upon the situation
    function handleChangeLanguage(e) {
        const currentLang = i18n.language

        if (currentLang === lang.ENGLISH) {
            i18n.changeLanguage(lang.NEPALI)
        } else {
            i18n.changeLanguage(lang.ENGLISH)
        }
    }

    // TODO: hamburder menu click function when you resize the browser
    const handleHamburgerMenuClick = () => {
        setToggleNav((toggleNav) => !toggleNav)
    }

    console.log(scrolledNavBar, 'scollNavbar')

    return (
        <nav
            className={classNames('navbar-container', {
                scrolled: scrolledNavBar,
            })}
        >
            <header className="navbar-top">
                <NavLink to="/" className="navbar-logo-container">
                    <img
                        src={logoImg}
                        alt="Media Alliance Nepal"
                        className="navbar-logo"
                    />
                    <span className="navbar-logo-attached-information">
                        <div className="navbar-today-date">
                            {/* bold this section, font-weight 500 */}
                            {new Date().toLocaleDateString('en-US', options)}
                        </div>
                        <div className="navbar-location-weather">
                            <div className="navbar-location">
                                <img
                                    src={locationTagImg}
                                    alt="location tag"
                                    className="location-icon"
                                />
                                <span className="location-text">काठमाडौं</span>
                            </div>
                            <div className="navbar-weather">
                                <img
                                    src={weatherTagImg}
                                    alt="weather tag"
                                    className="weather-icon"
                                />
                                <span className="weather-text">
                                    २८{' '}
                                    {/* Make this degree icon really small and position it absolute, top: 0 and right 0 */}
                                    <img
                                        src={degreeTagImg}
                                        alt="Degree tag"
                                        className="weather-degree-icon"
                                    />
                                </span>
                            </div>
                        </div>
                    </span>
                </NavLink>
                <div className="search-box-container">
                    <img
                        src={searchBarIconImg}
                        alt="magnifying glass icon as search bar icon"
                        className="search-box-icon"
                    />
                    <input
                        type="text"
                        className="search-box-input-field"
                        placeholder="Category, Title..."
                    />
                </div>
                <div className="navbar-settings">
                    <div className="navbar-unicode-container">
                        <BsKeyboard className="navbar-unicode-icon" />
                        <span className="navbar-unicode-text">Unicode</span>
                    </div>
                    <div
                        className="navbar-language-container"
                        onClick={handleChangeLanguage}
                    >
                        <BsGlobe2 className="navbar-language-icon" />
                        <span className="navbar-language-text">
                            {i18n.language === 'en' ? 'English' : 'नेपाली'}
                        </span>
                    </div>
                    <div className="navbar-profile-container">
                        <CgProfile className="navbar-profile-icon" />
                        <span className="navbar-profile-text">Profile</span>
                    </div>
                </div>
            </header>
            {/* This is for the red navbar menu */}
            {/* This section checks whether the totalNavItems (from the ref-width calculator function above) is applicable to the array data's length. If it is, render it or else slice it and display the ones that will fit in the given width */}
            <div className="navbar-menu-container">
                <div
                    className={classNames('navbar-menu', {
                        'is-opened': toggleNav,
                    })}
                    ref={navBarMenuRef}
                >
                    {scrolledNavBar && (
                        <>
                            <div className="navbar-logo-container"></div>
                            <div className="navbar-menu-home-logo-scrolled">
                                <NavLink to="/">
                                    <IoHome className="navbar-menu-home-icon" />{' '}
                                </NavLink>
                            </div>
                        </>
                    )}
                    {dummyData ? (
                        dummyData.length <= totalNavItems ? (
                            dummyData.map((data, index) => (
                                <NavItem
                                    key={index}
                                    item={data.item}
                                    type="text"
                                    urlLink={
                                        data?.urlLink ? data.urlLink : null
                                    }
                                />
                            ))
                        ) : (
                            <>
                                {dummyData
                                    .slice(0, totalNavItems)
                                    .map((data, index) => (
                                        <NavItem
                                            key={index}
                                            item={data.item}
                                            type="text"
                                            urlLink={
                                                data?.urlLink
                                                    ? data.urlLink
                                                    : null
                                            }
                                        />
                                    ))}
                                <NavItem
                                    item={t('navBarOthers')}
                                    type="hasSubMenu"
                                >
                                    {dummyData
                                        .slice(totalNavItems, dummyData.length)
                                        .map((data, index) => (
                                            <NavItem
                                                key={index}
                                                item={data.item}
                                                type={'text'}
                                                urlLink={
                                                    data?.urlLink
                                                        ? data.urlLink
                                                        : null
                                                }
                                            />
                                        ))}
                                </NavItem>
                            </>
                        )
                    ) : null}
                    {/* {dummyData && dummyData.length > 7
                    ? dummyData.map((data, index) =>
                          index < 7 ? (
                              <NavItem
                                  key={index}
                                  item={data.item}
                                  type={data.type}
                                  urlLink={data?.urlLink ? data.urlLink : null}
                                  picture={data.picture}
                              />
                          ) : (
                              <NavItem key={index} type={'has-submenu'}>
                                  {
                                      (data.item,
                                      data?.urlLink ? data.urlLink : null)
                                  }
                              </NavItem>
                          )
                      )
                    : dummyData.map((data, index) => (
                          <NavItem
                              key={index}
                              item={data.item}
                              type={data.type}
                              urlLink={data?.urlLink ? data.urlLink : null}
                              picture={data.picture}
                          />
                      ))} */}
                </div>
            </div>
            {/* TODO: hamburder menu section! */}
            <div
                className={classNames('hamburger', {
                    'is-opened': toggleNav,
                })}
                onClick={handleHamburgerMenuClick}
            >
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
            </div>
        </nav>
    )
}

export default NavBar
