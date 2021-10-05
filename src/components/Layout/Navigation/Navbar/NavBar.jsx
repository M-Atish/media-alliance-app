import './navbar.scss'

import NavItem from '../NavItem/NavItem'

const NavBar = ({ dummyData }) => {
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
                                urlLink={data.urlLink}
                                picture={data.picture}
                            />
                        ))}
                </div>
            </div>
        </>
    )
}

export default NavBar
