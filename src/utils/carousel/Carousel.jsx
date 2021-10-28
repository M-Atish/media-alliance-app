import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './carousel.scss'

import { HiArrowSmRight, HiArrowSmLeft } from 'react-icons/hi'

const Carousel = (props) => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <HiArrowSmLeft {...props} className="slick-prev" />
    )
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <HiArrowSmRight {...props} className="slick-next" />
    )
    const settings = {
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
    }
    return <Slider {...settings}>{props.children}</Slider>
}

export default Carousel
