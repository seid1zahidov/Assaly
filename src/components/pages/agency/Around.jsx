import './index.scss'
import text from './text.json'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {routes} from './../../../routes'
import RoundButton from '../../core/buttons/RoundButton'
import {ArrowRightIcon} from '../../../icons'

const Around = ({data}) => {
    const [isButtonHover, setIsButtonHover] = useState(false)
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="agency-around">
            <div className="around-left">
                <div className="around-title">{data?.translations[0]?.title}</div>
                <p>{data?.translations[0]?.desc}</p>
                <span className="btn">
                    <Link
                        to={routes.services.path}
                        onMouseEnter={() => setIsButtonHover(true)}
                        onMouseLeave={() => setIsButtonHover(false)}
                    >
                        <RoundButton
                            type="button"
                            bgColor="#FFFFFF"
                            hoverBgColor="#FEEF50"
                            text={<ArrowRightIcon fill="#03030F" />}
                        />
                    </Link>
                    <span className={`hoverable-text ${isButtonHover ? 'active' : ''}`}>
                        {text.en.btn_text?.split('').map((letter, index) => {
                            return (
                                <span key={index} className="letters" style={{animationDelay: `calc(0.03s * ${index})`, animationTimingFunction: 'ease'}}>{letter}</span>
                            )
                        })}
                    </span>
                </span>
            </div>
            <div className="around-right">
                <img className="around-img" src={data?.image} alt="" />
            </div>
        </div>
    )
}

export default Around
