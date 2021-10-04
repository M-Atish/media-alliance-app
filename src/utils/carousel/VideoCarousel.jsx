import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './videoCarousel.scss';

const VideoCarousel = (props) => {
    return (
        <div>
            <OwlCarousel
                className='owl-theme'
                items={3}
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
        </div>
    )
}

export default VideoCarousel
