import classNames from 'classnames'

import { useState } from 'react'

import { NavLink } from 'react-router-dom'

import './navitem.scss'

import { subMenuIconImg } from 'assets'

const NavItem = (props) => {
    const [open, setOpen] = useState(false)

    if (props?.type && props.type === 'hasSubMenu') {
        return (
            <>
                <div
                    className={classNames('item', 'has-submenu', {
                        open: open,
                    })}
                    onClick={() => setOpen(!open)}
                >
                    <p className="item-desc">
                        {props.item}
                        <span className="submenu-icon-container">
                            <img
                                src={subMenuIconImg}
                                className="submenu-icon"
                                alt=""
                            />
                        </span>
                    </p>
                    {open && (
                        <div className="sub-content">
                            {props.children?.map((data, index) => (
                                <NavLink
                                    to={data.props.urlLink}
                                    className="sub-item"
                                    key={index}
                                >
                                    <div className="sub-item-text-container">
                                        <span className="sub-item-text">
                                            {data.props.item}
                                        </span>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                    )}
                </div>
            </>
        )
    } else {
        return props.urlLink ? (
            <NavLink
                to={props.urlLink}
                className={classNames({
                    item: props.type === 'text',
                })}
                activeClassName="is-active"
            >
                <p className="item-desc">{props.item}</p>
            </NavLink>
        ) : (
            <p className="item-desc">{props.item}</p>
        )
    }
}

export default NavItem
