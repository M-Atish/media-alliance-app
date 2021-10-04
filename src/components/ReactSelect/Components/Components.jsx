import React from 'react'
import { components } from 'react-select'

import './components.scss'

const Components = {
    Option: ({ data, ...props }) => {
        return (
            <components.Option className="input-select" {...props}>
                <div className="input-selector">
                    {data.icon && (
                        <span className="input-select__icon">
                            <img
                                src={data.icon}
                                alt="Icon"
                                className="selector-flag"
                            />
                        </span>
                    )}
                    <span>{data.label}</span>
                </div>
            </components.Option>
        )
    },
    SingleValue: ({ data, ...props }) => {
        return (
            <components.SingleValue {...props}>
                <div className="input-selector">
                    <img src={data.icon} alt="icon" className="selector-flag" />
                    {data.label}
                </div>
            </components.SingleValue>
        )
    },
}

export default Components
