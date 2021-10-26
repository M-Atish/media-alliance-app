import './horoscope.scss'
import { useFetchHoroscopes } from 'hooks/horoscopes/useFetchHoroscopes'

const Horoscope = () => {
    const { status: statusHoroscopes, data: horoscopesData } =
        useFetchHoroscopes()

    return (
        <section className="horoscope-container">
            <main className="horoscope-main-body-container">
                {horoscopesData?.payload
                    ? horoscopesData.payload.map((data, index) => (
                          <div className="horoscope-data">
                              <h3>{data.sign}</h3>
                              {data.description}
                          </div>
                      ))
                    : null}
            </main>
        </section>
    )
}

export default Horoscope
