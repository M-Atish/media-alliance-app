import './leaderboardAdvertisement.scss'

const LeaderboardAdvertisement = ({ payload }) => {
    return payload?.map((item, index) => (
        <img
            className="leaderboard-image"
            src={item}
            alt="leaderboard advertisement"
            key={index}
        />
    ))
}

export default LeaderboardAdvertisement
