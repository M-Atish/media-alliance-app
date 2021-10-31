import './switchCheckBox.scss'

const SwitchCheckBox = ({ isOn, handleToggle }) => {
    return (
        <label className="switch">
            <input type="checkbox" checked={isOn} onChange={handleToggle} />
            <div className="slider"></div>
        </label>
    )
}

export default SwitchCheckBox
