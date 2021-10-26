import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import './carousel.scss'

const Carousel = (props) => {
    return (
        <OwlCarousel
            className="owl-theme"
            items={props.itemsNumber}
            margin={10}
            dots={false}
            autoplay={true}
            autoplayTimeout={5000}
            autoplayHoverPause={true}
            video={true}
            videoHeight={100}
            videoWidth={100}
            rewind={true}
            nav
        >
            {props.children}
        </OwlCarousel>
    )
}

export default Carousel
