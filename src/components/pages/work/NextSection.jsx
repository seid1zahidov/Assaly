import './index.scss'
import text from './text.json'
import RoundButton from '../../core/buttons/RoundButton'
import {ArrowRightIcon} from '../../../icons'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import NavigationHelper from './../../../utils/navigation'
import {routes} from './../../../routes'

const NextSection = ({work}) => {
    const [show, setShow] = useState(false)
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="next-work">
            <div className="next-left">
                <h5>{work?.name}</h5>
                <div className="next-img">
                    <img src={work?.hover_img} alt="" />
                </div>
            </div>
            <div className="next-right">
                <span className="next-btn">
                <span className={`next-btn-text ${show ? 'show' : ''}`}>
                    {text.en.next_btn_text?.split('').map((letter, index) => {
                        return (
                            <span key={index} className="letters" style={{animationDelay: `calc(0.03s * ${index})`, animationTimingFunction: 'ease'}}>{letter}</span>
                        )
                    })}
                </span>
                    <Link to={NavigationHelper.getNavigationUrl(routes.work.path, ':id', work?.id)} className="btn"
                        onMouseEnter={() => setShow(true)}    
                        onMouseLeave={() => setShow(false)}    
                    >
                        <RoundButton
                            type="button"
                            bgColor="#03030F"
                            hoverBgColor="#03030F"
                            text={<ArrowRightIcon fill="#FFFFFF" />}
                        />
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default NextSection
