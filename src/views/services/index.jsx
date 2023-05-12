import Hero from './../../components/pages/services/Hero'
import Creativity from './../../components/pages/services/Creativity'
import OurServices from './../../components/pages/services/OurServices'
import CustomersSlider from './../../components/pages/services/CustomersSlider'
import {useEffect, useState} from 'react'
import Loader from '../../components/layouts/loader'
import {useSelector, useDispatch} from 'react-redux'
import {getServices} from '../../store/backend'

const Services = () => {
    const dispatch = useDispatch()
    const [bgColor, setBgColor] = useState('#feef50')
    const [showCover, setShowCover] = useState(true)
    const lang = useSelector(state => state.lang.lang)
    const serviceData = useSelector(state => state.backend.serviceData)

    useEffect(() => {
        dispatch(getServices(lang))
        window.scrollTo(0, 0)
        setTimeout(() => {
            setBgColor('transparent')
        }, 4000)

        setTimeout(() => {
            setShowCover(false)
        }, 3000)
    }, [])

    return showCover ? (
        <Loader />
    ) : (
        <div style={{backgroundColor: bgColor}}>
            <Hero data={serviceData} />
            <Creativity data={serviceData?.creative_production} />
            <OurServices services={serviceData?.services} />
            <CustomersSlider />
        </div>
    )
}

export default Services
