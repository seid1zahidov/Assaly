import AppealForm from "../../components/pages/contact/AppealForm"
import AppealFormFooter from "../../components/pages/contact/AppealFormFooter"
import {useEffect, useState} from "react"
import Loader from "../../components/layouts/loader"
import {useDispatch, useSelector} from 'react-redux'
import {getServices} from '../../store/backend'

const Contact = () => {
    const dispatch = useDispatch()
    const [showCover, setShowCover] = useState(true)
    const lang = useSelector(state => state.lang.lang)
    const serviceData = useSelector(state => state.backend.serviceData)

    useEffect(() => {    
        dispatch(getServices(lang))

        window.scrollTo(0, 0)    
        setTimeout(() => {
            setShowCover(false)
        }, 2000)
    }, [])
    
    return showCover ? (
        <Loader />
    ) : (
        <>
            <AppealForm services={serviceData?.services} />
            <AppealFormFooter />
        </>
    )
}

export default Contact
