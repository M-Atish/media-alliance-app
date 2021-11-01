import './rightSideVideos.scss'
import SingleRightSideVideo from './SingleRightSideVideo/SingleRightSideVideo'

const RightSideVideos = ({ payload }) => {
    const tags = [
        'tag',
        'tag',
        'tag',
        'tag',
        'tag',
        'tag',
        'tag',
        'tag',
        'tag',
        'tag',
        'tag',
    ]
    return (
        <div className="right-side-video-container">
            <SingleRightSideVideo
                urlLink={payload?.url ? payload.url : null}
                image={payload?.image?.imageUrl ? payload.image.imageUrl : null}
                title={payload?.title ? payload.title : null}
                date={payload?.updated_at ? payload.updated_at : null}
                tags={tags}
            />
            <SingleRightSideVideo
                urlLink={payload?.url ? payload.url : null}
                image={payload?.image?.imageUrl ? payload.image.imageUrl : null}
                title={payload?.title ? payload.title : null}
                date={payload?.updated_at ? payload.updated_at : null}
                tags={tags}
            />
            <SingleRightSideVideo
                urlLink={payload?.url ? payload.url : null}
                image={payload?.image?.imageUrl ? payload.image.imageUrl : null}
                title={payload?.title ? payload.title : null}
                date={payload?.updated_at ? payload.updated_at : null}
                tags={tags}
            />
            <SingleRightSideVideo
                urlLink={payload?.url ? payload.url : null}
                image={payload?.image?.imageUrl ? payload.image.imageUrl : null}
                title={payload?.title ? payload.title : null}
                date={payload?.updated_at ? payload.updated_at : null}
                tags={tags}
            />
            <SingleRightSideVideo
                urlLink={payload?.url ? payload.url : null}
                image={payload?.image?.imageUrl ? payload.image.imageUrl : null}
                title={payload?.title ? payload.title : null}
                date={payload?.updated_at ? payload.updated_at : null}
                tags={tags}
            />
            <SingleRightSideVideo
                urlLink={payload?.url ? payload.url : null}
                image={payload?.image?.imageUrl ? payload.image.imageUrl : null}
                title={payload?.title ? payload.title : null}
                date={payload?.updated_at ? payload.updated_at : null}
                tags={tags}
            />
            <SingleRightSideVideo
                urlLink={payload?.url ? payload.url : null}
                image={payload?.image?.imageUrl ? payload.image.imageUrl : null}
                title={payload?.title ? payload.title : null}
                date={payload?.updated_at ? payload.updated_at : null}
                tags={tags}
            />
            <SingleRightSideVideo
                urlLink={payload?.url ? payload.url : null}
                image={payload?.image?.imageUrl ? payload.image.imageUrl : null}
                title={payload?.title ? payload.title : null}
                date={payload?.updated_at ? payload.updated_at : null}
                tags={tags}
            />
        </div>
    )
}

export default RightSideVideos
