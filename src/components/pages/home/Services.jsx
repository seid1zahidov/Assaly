import './index.scss'
import data from '../../../data.json'
import RoundButton from '../../core/buttons/RoundButton'
import text from './text.json'
import {PlusIcon} from '../../../icons'
import {routes} from './../../../routes'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {getServices} from '../../../store/backend'
import {useDispatch, useSelector} from 'react-redux'

const Services = () => {
    const dispatch = useDispatch()
    const [activeService, setIsActiveService] = useState('')
    const services = useSelector(state => state.backend.services)
    const subServices = useSelector(state => state.backend.subServices)
    const lang = useSelector(state => state.lang.lang)

    useEffect(() => {
        dispatch(getServices(lang))
    }, [])

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="services">
            <h4 className="services-title">{text.en.services_title}</h4>
            <div className="accordion" allowZeroExpanded>
                {services?.map(service => (
                    <div className={`service-item ${service?.id === activeService ? 'active' : ''}`} key={service?.id}>
                        <div className="accordion-item-container">
                            <div className="accordion-header"
                                onClick={() => activeService === service?.id ? setIsActiveService('') : setIsActiveService(service?.id)}
                            >
                                <div className="accordion-btn">
                                    <span className="sub-services">
                                        {subServices?.filter(sub => sub?.parent_id === service?.id)?.map((subItem, index) => {
                                            return (
                                                <span key={index} className="sub-item">{subItem?.translations[0]?.name}</span>
                                            )
                                        })}
                                    </span>
                                    <div className="name-container">
                                        <span className="name">{service?.translations[0]?.service_name}</span>
                                        <span className="icon">{activeService === service?.id ? <span className="minus"/> : <PlusIcon/>}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-body">
                                <span className="service-desc">{service?.translations[0]?.service_desc_home}</span>
                                <Link to={routes.services.path} className="btn">
                                    <RoundButton
                                        type="button"
                                        bgColor="#FEEF50"
                                        hoverBgColor="#FEEF50"
                                        textColor="#03030F"
                                        textHoverColor="#03030F"
                                        text={<PlusIcon />}
                                    />
                                    <span className="btn-text">
                                        {text.en.see_more?.split('').map((letter, index) => {
                                            return (
                                                <span key={index} className="letters" style={{animationDelay: `calc(0.03s * ${index})`, animationTimingFunction: 'ease'}}>{letter}</span>
                                            )
                                        })}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
