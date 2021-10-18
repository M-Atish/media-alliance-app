import React from 'react'
import Select from 'react-select'

const ReactSelect = ({ ...props }) => {
    const style = {
        control: (base) => ({
            ...base,
            border: 0,
            // This line disable the blue border
            boxShadow: 'none',
        }),
    }

    return <Select {...props} styles={style} />
}

export default ReactSelect
