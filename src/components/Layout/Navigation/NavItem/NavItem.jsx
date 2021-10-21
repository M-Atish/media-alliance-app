import classNames from 'classnames'

import { useState } from 'react'

import { NavLink } from 'react-router-dom'

import './navitem.scss'

const NavItem = (props) => {
    const [open, setOpen] = useState(false)

    if (props.type === 'hasSubMenu') {
        return (
            <>
                <div
                    className={classNames('item', 'has-submenu', {
                        open: open,
                    })}
                    onClick={() => setOpen(!open)}
                >
                    {props.picture && (
                        <img
                            src={props.picture}
                            alt="icons"
                            className="nav-item-picture"
                        />
                    )}
                    {props.item}
                    <div className="sub-content">{open && props.children}</div>
                </div>
            </>
        )
    } else {
        return (
            <NavLink
                to={props.urlLink}
                className={classNames({
                    item: props.type === 'text',
                    logo: props.type === 'logo',
                })}
                activeClassName="is-active"
            >
                {props.picture ? (
                    <>
                        <img
                            src={props.picture}
                            alt="Logo of the organization"
                            className="nav-item-picture"
                        />
                        <span>{props.item}</span>
                    </>
                ) : (
                    props.item
                )}
            </NavLink>
        )
    }
}

export default NavItem
