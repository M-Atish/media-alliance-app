import './navsubitem.scss'

import { NavLink } from 'react-router-dom'

const NavSubItem = ({ urlLink, item }) => {
    return (
        <NavLink to={urlLink} className="sub-menu-item">
            {item}
        </NavLink>
    )
}

export default NavSubItem
