import SinglePieceVideo from './SinglePieceVideo/SinglePieceVideo'

import './fourPieceVideos.scss'

const FourPieceVideos = ({ payload }) => {
    console.log(payload)
    return (
        <div className="four-piece-video-container">
            <SinglePieceVideo
                urlLink={payload?.url ? payload.url : null}
                title={payload?.title ? payload.title : null}
                image={payload?.image?.imageUrl ? payload.image.imageUrl : null}
                date={
                    payload.updated_at &&
                    new Date(payload?.updated_at ? payload.updated_at : null)
                }
            />
            <SinglePieceVideo
                urlLink={payload?.url ? payload.url : null}
                title={payload?.title ? payload.title : null}
                image={payload?.image?.imageUrl ? payload.image.imageUrl : null}
                date={
                    payload.updated_at &&
                    new Date(payload?.updated_at ? payload.updated_at : null)
                }
            />
            <SinglePieceVideo
                urlLink={payload?.url ? payload.url : null}
                title={payload?.title ? payload.title : null}
                image={payload?.image?.imageUrl ? payload.image.imageUrl : null}
                date={
                    payload.updated_at &&
                    new Date(payload?.updated_at ? payload.updated_at : null)
                }
            />
            <SinglePieceVideo
                urlLink={payload?.url ? payload.url : null}
                title={payload?.title ? payload.title : null}
                image={payload?.image?.imageUrl ? payload.image.imageUrl : null}
                date={
                    payload.updated_at &&
                    new Date(payload?.updated_at ? payload.updated_at : null)
                }
            />
        </div>
    )
}

export default FourPieceVideos
