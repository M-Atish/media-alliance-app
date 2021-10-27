import './calendar.scss'

const Calendar = () => {
    return (
        <div className="calendar-iframe">
            <div className="calendar-iframe-container">
                <div className="remover-one"></div>
                <div className="remover-two"></div>
                <iframe
                    title="calendar"
                    src="https://www.hamropatro.com/widgets/calender-full.php"
                    frameborder="0"
                    scrolling="no"
                    marginwidth="0"
                    marginheight="0"
                    style={{
                        border: 'none',
                        overflow: 'hidden',
                        width: '800px',
                        height: '840px',
                    }}
                    allowtransparency="true"
                    className="iframe-calendar"
                ></iframe>
            </div>
        </div>
    )
}

export default Calendar
