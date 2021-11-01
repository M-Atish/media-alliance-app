import Spinner from 'components/Spinner/Spinner'
import { useFetchHoroscopes } from 'hooks/horoscopes/useFetchHoroscopes'

import './dashboardHoroscope.scss'
import DashboardSingleHoroscope from './DashboardSingleHoroscope/DashboardSingleHoroscope'

const DashboardHoroscope = () => {
    const { status: horoscopeStatus, data: horoscopeData } =
        useFetchHoroscopes()

    console.log(horoscopeData)

    return (
        <div className="dashboard-horoscope-container">
            {horoscopeStatus === 'loading' ? (
                <Spinner />
            ) : Array.isArray(
                  horoscopeData?.payload ? horoscopeData.payload : null
              ) ? (
                horoscopeData.payload.map((horoscope, index) => (
                    <DashboardSingleHoroscope
                        name={horoscope?.name ? horoscope.name : null}
                        image={horoscope?.image ? horoscope.image : null}
                        // url = {horoscope?.image ? horoscope.url : null}
                    />
                ))
            ) : null}
        </div>
    )
}

export default DashboardHoroscope
