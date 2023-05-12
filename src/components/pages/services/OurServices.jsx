import './index.scss'
import text from './text.json'
import RoundButton from './../../core/buttons/RoundButton'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {routes} from './../../../routes'
import {ArrowRightIcon} from '../../../icons'

const OurServices = ({services}) => {
    const [isButtonHover, setIsButtonHover] = useState('')

    return (
        <div className="our-services">
            <h5>{text.en.our_services_title}</h5>
            <div className="elements">
                {services?.map(item => {
                    return (
                        <div data-aos="fade-up" data-aos-duration="1000" className="service" key={item?.id}>
                            <div className="service-info">
                                <span className="service-name">{item?.translations[0]?.service_name}</span>
                                <p className="service-desc">{item?.translations[0]?.service_desc}</p>
                                <span className="btn">
                                    <Link
                                        to={routes.case_studies.path}
                                        onMouseEnter={() => setIsButtonHover(item?.id)}
                                        onMouseLeave={() => setIsButtonHover('')}
                                    >
                                        <RoundButton
                                            type="button"
                                            bgColor="#03030F"
                                            hoverBgColor="#FEEF50"
                                            text={<ArrowRightIcon fill={isButtonHover === item?.id ? '#03030F' : '#FFFFFF'} />}
                                        />
                                    </Link>
                                    <span className={`hoverable-text ${isButtonHover === item?.id ? 'active' : ''}`}>
                                        {text.en.btn_text?.split('').map((letter, index) => {
                                            return (
                                                <span key={index} className="letters" style={{animationDelay: `calc(0.03s * ${index})`, animationTimingFunction: 'ease'}}>{letter}</span>
                                            )
                                        })}
                                    </span>
                                </span>
                            </div>
                            <img src={item?.img} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OurServices
