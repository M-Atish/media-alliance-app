import { logoImg, locationIconImg } from '../../../../assets'

import './navbar.scss'

import NavItem from '../NavItem/NavItem'
import NavSubItem from '../NavSubItem/NavSubItem'

const NavBar = () => {
    return (
        <div className="navbar-container">
            {/* After the API comes in, use map() to loop throughout the entire thing and render the given elements. */}
            <div className="navbar-menu">
                <NavItem
                    item="Media Alliance"
                    type="logo"
                    urlLink="/"
                    picture={logoImg}
                />
                <NavItem item="समाचार" type="text" urlLink="/news" picture="" />
                <NavItem
                    item="विदेशी मुद्रा"
                    type="text"
                    urlLink="/forex"
                    picture=""
                />
                <NavItem
                    item="शेयर बजार"
                    type="text"
                    urlLink="/share-market"
                    picture=""
                />
                <NavItem
                    item="क्यालेन्डर "
                    type="text"
                    urlLink="/calendar"
                    picture=""
                />
                <NavItem
                    item="मिति परिवर्तन"
                    type="text"
                    urlLink="/date-converter"
                    picture=""
                />
                <NavItem
                    item="सुन/चाँदी मूल्य"
                    type="text"
                    urlLink="/gold"
                    picture=""
                />
                <NavItem
                    item="युनिकोड"
                    type="text"
                    urlLink="/unicode"
                    picture=""
                />
                <NavItem
                    item="ईएमआई क्यालकुलेटर"
                    type="text"
                    urlLink="/emi"
                    picture=""
                />
                <NavItem
                    item="शेयर क्यालकुलेटर"
                    type="text"
                    urlLink="/share-calculator"
                    picture=""
                />
                <NavItem
                    item=""
                    type="hasSubMenu"
                    urlLink="/"
                    picture={locationIconImg}
                >
                    <NavSubItem urlLink="/" item="SubItem1" />
                    <NavSubItem urlLink="/" item="SubItem1" />
                    <NavSubItem urlLink="/" item="SubItem1" />
                    <NavSubItem urlLink="/" item="SubItem1" />
                    <NavSubItem urlLink="/" item="SubItem1" />
                    <NavSubItem urlLink="/" item="SubItem1" />
                    <NavSubItem urlLink="/" item="SubItem1" />
                    <NavSubItem urlLink="/" item="SubItem1" />
                </NavItem>
            </div>
        </div>
    )
}

export default NavBar
