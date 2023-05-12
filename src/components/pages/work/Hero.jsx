import './index.scss'
import text from './text.json'
import RoundButton from './../../core/buttons/RoundButton'
import {ArrowBottomIcon} from '../../../icons'
import {Link} from 'react-router-dom'
import {routes} from './../../../routes'

const Hero = ({work}) => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="work-hero">
            <div className="hero-left">
                <h3>{work?.name}</h3>
                <div className="additional">
                    <div className="work-client">
                        <span>{text.en.client}</span>
                        <span className="client">{work?.client}</span>
                    </div>
                    <div className="work-services">
                        <span>{text.en.service}</span>
                        <ul>
                            {/* {work?.services?.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={routes.services.path}>{item?.translations[0]?.service_name}</Link>
                                    </li>
                                )
                            })} */}
                            {<li>
                                <Link to={routes.services.path}>{work?.services?.translations[0]?.service_name}</Link>
                            </li>}
                        </ul>
                    </div>
                    <div className="work-client">
                        <span>{text.en.date}</span>
                        <span>{work?.date}</span>
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <p>{work?.translations[0]?.inner_desc}</p>
                <span onClick={() => window.scrollTo(0, window.innerHeight)} className="btn">
                    <RoundButton
                        type="button"
                        bgColor="#03030F"
                        hoverBgColor="#03030F"
                        text={<ArrowBottomIcon />}
                    />
                </span>
            </div>
        </div>
    )
}

export default Hero
