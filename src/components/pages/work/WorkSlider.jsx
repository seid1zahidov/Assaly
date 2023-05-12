import './index.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {useEffect, useRef, useState} from 'react'
import Draggable from '../../core/draggable'

const WorkSlider = ({data}) => {
    const deviceWidth = window.innerWidth
    const [slidesCount, setSlidesCount] = useState(1.3)
    const [showDrag, setShowDrag] = useState(false)
    const sliderRef = useRef()

    useEffect(() => {
        deviceWidth < 768 && setSlidesCount(1.1)
    }, [])

    const settings = {
        dots: true,
        arrows:false,
        infinite: false,
        speed: 500,
        slidesToShow: slidesCount,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        slidesToScroll: 1,
        autoplay: false
    }

    return (
        <div className="work-slider">
            <div id="slider"
                onMouseEnter={() => setShowDrag(true)}
                onMouseLeave={() => setShowDrag(false)}
            >
                <Slider ref={sliderRef} {...settings}>
                    {data?.map((item, index) => {
                        return (
                            <div className="item-container" key={index}>
                                <div className="img">
                                    <img className="slider-img" src={item} alt="Assaly" />
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
            {showDrag && <Draggable bgColor="#03030F" />}
        </div>
    )
}

export default WorkSlider
