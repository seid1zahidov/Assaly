import './index.scss'
import data from './data.json'
import {useEffect, useState} from 'react'
import RoundButton from './../../core/buttons/RoundButton'
import {ArrowTopIcon, PlusIcon} from './../../../icons'
import {Link} from 'react-router-dom'
import {routes} from './../../../routes'
import DateHelper from './../../../utils/date'
import {useDispatch, useSelector} from 'react-redux'
import {getSocials} from '../../../store/backend'
const Footer = ({isLight}) => {
    const settings = useSelector(state => state.backend.settings)
    const socials = useSelector(state => state.backend.socials)
    const parisOffset = 2
    const userTimezoneOffset = new Date().getTimezoneOffset() / 60
    const [date, setDate] = useState(new Date(Date.now() + (parisOffset + userTimezoneOffset) * 60 * 60 * 1000))
    const [isButtonHover, setIsButtonHover] = useState(false)

    const dispatch = useDispatch()

    const currentYear = date.getFullYear()
    const currentHour = date.getHours()
    let currentMinute = date.getMinutes()

    const returnDate = () => {
        return `${DateHelper.getModifiedHour(currentHour)} : ${DateHelper.getMinutes(currentMinute)} ${DateHelper.getAmPm(currentHour)} ${DateHelper.getTimezoneOffset(date)}`
    }

    useEffect(() => {
        setTimeout(() => {
            setDate(new Date(Date.now() + (parisOffset + userTimezoneOffset) * 60 * 60 * 1000))
        }, 1000)
    }, [date])

    useEffect(() => {
        dispatch(getSocials())
    }, [])

    return (
        <>
            <div className={`footer ${isLight ? 'light' : ''}`}>
                <div className="header">
                    <div className="head">
                        <span>{data.en.office}</span>
                        <span>{data.en.contact}</span>
                    </div>
                    <div className="data">
                        <span className="data-element">
                            <span>{settings?.address}</span>
                            <span>{settings?.city_country}</span>
                        </span>
                        <span className="data-element">
                            <span>{returnDate()}</span>
                        </span>
                        <span className="data-element">
                            <span>
                                {settings?.phone}
                            </span>
                            <span>
                                <a href={`mailto: ${settings?.email}`}>{settings?.email}</a>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="content">
                    <span className="text">{data.en.lets_work}</span>
                    <span className="btn">
                        <Link
                            to={routes.contact.path}
                            onMouseEnter={() => setIsButtonHover(true)}
                            onMouseLeave={() => setIsButtonHover(false)}
                        >
                            <RoundButton
                                type="button"
                                bgColor={isLight ? '#03030F' : '#FEEF50'}
                                hoverBgColor={isLight ? '#03030F' : '#FEEF50'}
                                text={<PlusIcon fill={isLight ? '#FEEF50' : ''} />}
                            />
                        </Link>
                        <span className={`hoverable-text ${isButtonHover ? 'active' : ''}`}>
                            {}
                            {data.en.btn_text?.split('').map((letter, index) => {
                                return (
                                    <span key={index} className="letters" style={{animationDelay: `calc(0.03s * ${index})`, animationTimingFunction: 'ease'}}>{letter}</span>
                                )
                            })}
                        </span>
                    </span>
                </div>
                <div className="bottom">
                    <span className="privacy-cookie">
                        <Link to={routes.privacy_policy.path}>{data.en.privacy}</Link>
                        <Link to={routes.cookies.path}>{data.en.cookie}</Link>
                        <span>{`@${currentYear} ${data.project_name}`}</span>
                    </span>
                    <span className="to-top" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
                        <ArrowTopIcon fill={isLight ? '#03030F' : ''} />
                        <span>{data.en.to_top}</span>
                    </span>
                    <span className="socials">
                        {socials?.map((item, index) => {
                            return (
                                <a key={index} href={item?.link}>{item?.name}</a>
                            )
                        })}
                    </span>
                </div>
            </div>

            <div className={`footer-mobile ${isLight ? 'light' : ''}`}>
                <div className="header-mobile-footer">
                    <span className="mobile-date">
                        <span>{returnDate()}</span>
                    </span>
                    <div className="mobile-office">
                        <span>{data.en.office}</span>
                        <span>{settings?.address}</span>
                        <span>{settings?.city_country}</span>
                    </div>
                    <div className="mobile-contact">
                        <span>{data.en.contact}</span>
                        <span>
                            {settings?.phone}
                        </span>
                        <span>
                            <a href={`mailto: ${settings?.email}`}>{settings?.email}</a>
                        </span>
                    </div>
                    <span className="socials">
                        {socials?.map((item, index) => {
                            return (
                                <a key={index} href={item?.link}>{item?.name}</a>
                            )
                        })}
                    </span>
                    <span className="socials">
                        <Link to={routes.privacy_policy.path}>{data.en.privacy}</Link>
                        <Link to={routes.cookies.path}>{data.en.cookie}</Link>
                    </span>
                </div>
                <div className="footer-mobile-content">
                    <span className="text">{data.en.lets_work}</span>
                    <span className="btn">
                        <Link
                            to={routes.contact.path}
                            onMouseEnter={() => setIsButtonHover(true)}
                            onMouseLeave={() => setIsButtonHover(false)}
                        >
                            <RoundButton
                                type="button"
                                bgColor={isLight ? '#03030F' : '#FEEF50'}
                                hoverBgColor={isLight ? '#03030F' : '#FEEF50'}
                                text={<PlusIcon fill={isLight ? '#FEEF50' : ''} />}
                            />
                        </Link>
                        <span className={`hoverable-text ${isButtonHover ? 'active' : ''}`}>
                            {}
                            {data.en.btn_text?.split('').map((letter, index) => {
                                return (
                                    <span key={index} className="letters" style={{animationDelay: `calc(0.03s * ${index})`, animationTimingFunction: 'ease'}}>{letter}</span>
                                )
                            })}
                        </span>
                    </span>
                </div>
                <div className="mobile-footer-bottom">
                    <span>
                        {`@${currentYear} ${data.project_name}`}
                    </span>
                    
                    <span onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
                        <ArrowTopIcon fill={isLight ? '#03030F' : ''} />
                        <span>{data.en.to_top}</span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Footer
