import { ellipseMenuItems } from 'global/constants/dummyData'
import EllipseMenuItem from '../EllipseMenuItem/EllipseMenuItem'

import classNames from 'classnames'

import './ellipseMenu.scss'

const EllipseMenu = ({ active, top }) => {
    return (
        <div
            className={classNames('ellipse-menu-container', {
                inactive: !active,
                top: top,
            })}
        >
            {ellipseMenuItems.map((item, index) => (
                <EllipseMenuItem
                    icon={item.icon}
                    desc={item.desc}
                    key={index}
                />
            ))}
        </div>
    )
}

export default EllipseMenu
