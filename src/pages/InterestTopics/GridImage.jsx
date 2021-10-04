import "./gridImage.scss";


const GridImage = ({ image, title }) => {

    const onCheckedFavs = () => {
        // do something
    }

    return (
        <label className='grid-image' onClick={onCheckedFavs}>
            <input type="checkbox" />
            <figure>
                    <img src={image} alt={title} />
                    <figcaption>{title}</figcaption>
            </figure>
            <span className="checked-icon">
                <i className="las la-check"></i>
            </span>
        </label>
    )
}

export default GridImage
