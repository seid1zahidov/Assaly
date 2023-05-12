import './index.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Draggable from '../../core/draggable'
import {useRef, useState, useEffect} from 'react'
import ApiService from './../../../api/backend'
import NavigationHelper from './../../../utils/navigation'
import {useSelector} from 'react-redux'

const CustomersSlider = () => {
    const lang = useSelector(state => state.lang.lang)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [customers, setCustomers] = useState([])
    const [showDrag, setShowDrag] = useState(false)
    const sliderRef = useRef()

    const fetchData = async lang => {
        try {
            const {data} = await ApiService.getCustomers(lang)
            setCustomers(data?.feedbacks)
        } catch (e) {
            NavigationHelper.navigateNotFoundPage()
        }
    }
    useEffect(() => {
        fetchData(lang)
    }, [lang])

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        
    }

    return (
        <div className="customers-slider"
            onMouseOver={() => setShowDrag(true)}
            onMouseLeave={() => setShowDrag(false)}
        >
            <div className="customer-slider">
                <Slider beforeChange={(currentSlide, nextSlide) => setCurrentIndex(nextSlide)} {...settings} ref={sliderRef}>
                    {customers?.map((customer, index) => {
                        return (
                            <div key={customer?.id} className={`customer ${index !== currentIndex ? 'opacity-20' : ''}`}>
                                <p>{customer?.translations[0]?.text}</p>
                                <div>
                                    <img src={customer?.image} alt="" />
                                    <div>
                                        <span>{customer?.author_name}</span>
                                        <span>{customer?.translations[0]?.author_position}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
            {showDrag && <Draggable bgColor="#FFFFFF" isLight={true} />}
        </div>
    )
}

export default CustomersSlider
