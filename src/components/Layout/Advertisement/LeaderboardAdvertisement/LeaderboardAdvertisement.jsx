import './leaderboardAdvertisement.scss'

const LeaderboardAdvertisement = ({ payload }) => {
    return payload?.map((item, index) => (
        <figure>
            <img
                className="leaderboard-image"
                src={item}
                alt="leaderboard advertisement"
                key={index}
            />
        </figure>
    ))
}

export default LeaderboardAdvertisement
