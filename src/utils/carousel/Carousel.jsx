import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './carousel.scss'

import { HiArrowSmRight, HiArrowSmLeft } from 'react-icons/hi'

const Carousel = (props) => {
    const settings = {
        speed: 300,
        autoplaySpped: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <HiArrowSmLeft className="slick-prev" />,
        nextArrow: <HiArrowSmRight className="slick-next" />,
    }
    return <Slider {...settings}>{props.children}</Slider>
}

export default Carousel
