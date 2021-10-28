import './advertisement.scss'
import classNames from 'classnames'
import LeaderboardAdvertisement from './LeaderboardAdvertisement/LeaderboardAdvertisement'
import WideSkyScrapersAdvertisement from './WideSkyScrapersAdvertisement/WideSkyScrapersAdvertisement'
import MediumRectanglesAdvertisement from './MediumRectanglesAdvertisement/MediumRectanglesAdvertisement'
import LargeRectanglesAdvertisement from './LargeRectanglesAdvertisement/LargeRectanglesAdvertisement'

const Advertisement = ({ type, bgColor, payload }) => {
    // A note to future developers: please send the payload, whatever the hell it is: images, gifs, videos, etc. in an array format. Thanks.
    type = type.toLowerCase()

    switch (type) {
        case 'leaderboard':
            return (
                <div
                    className={classNames(
                        'advertisement-container leaderboard',
                        {
                            grey: bgColor === 'grey',
                        }
                    )}
                >
                    <LeaderboardAdvertisement payload={payload} />
                </div>
            )
        case 'wide-skyscrapers':
            return (
                <div
                    className={classNames(
                        'advertisement-container wide-skyscrapers',
                        {
                            grey: bgColor === 'grey',
                        }
                    )}
                >
                    <WideSkyScrapersAdvertisement payload={payload} />
                </div>
            )
        case 'medium-rectangles':
            return (
                <div
                    className={classNames(
                        'advertisement-container medium-rectangles',
                        {
                            grey: bgColor === 'grey',
                        }
                    )}
                >
                    <MediumRectanglesAdvertisement payload={payload} />
                </div>
            )
        case 'large-rectangles':
            return (
                <div
                    className={classNames(
                        'advertisement-container large-rectangles',
                        {
                            grey: bgColor === 'grey',
                        }
                    )}
                >
                    <LargeRectanglesAdvertisement payload={payload} />
                </div>
            )
        default:
            return
    }
}

export default Advertisement
