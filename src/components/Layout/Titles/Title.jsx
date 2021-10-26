import './title.scss'

import { NavLink } from 'react-router-dom'

const Title = ({ title, urlLink, classTitle }) => {
    return (
        <header className={`${classTitle}-header`}>
            <h2 className={`${classTitle}-title`}>
                {title ? title : 'No title'}
            </h2>
            <NavLink
                to={urlLink ? urlLink : '/'}
                className={`${classTitle}-see-all-tag`}
            >
                सबै हेर्नुहोस्
            </NavLink>
        </header>
    )
}

export default Title
