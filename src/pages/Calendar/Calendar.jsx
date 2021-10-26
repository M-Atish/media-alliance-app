import './calendar.scss'

const Calendar = () => {
    return (
        <div className="calendar-iframe">
            <iframe
                title="nepali-calendar"
                src="https://www.ashesh.com.np/nepali-calendar/calendar.php?api='+nc_api_id+'"
                frameborder="0"
                allowtransparency="true"
                onload="this.style.height=(this.contentWindow.document.body.scrollHeight+5)+\'px\';"
            ></iframe>
            <div id="ncwidgetlink">
                Powered by ©{' '}
                <a
                    href="https://www.ashesh.com.np/nepali-calendar/"
                    id="nclink"
                    title="Nepali calendar"
                    target="_blank"
                    rel="noreferrer"
                >
                    nepali calendar
                </a>
            </div>
        </div>
    )
}

export default Calendar
