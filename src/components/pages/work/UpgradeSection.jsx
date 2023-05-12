import './index.scss'
import RoundButton from '../../core/buttons/RoundButton'
import {ArrowRightIcon} from '../../../icons'
import {useState} from 'react'
import text from './text.json'

const UpgradeSection = ({work}) => {
    const [isButtonHover, setIsButtonHover] = useState(false)

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="upgrade">
            <div className="upgrade-text">
                <h5>{work?.translations[0]?.upgrade_text}</h5>
                {work?.url && (
                    <div className="live">
                        <a href={work?.url} target="_blank" rel="noopener noreferrer"
                            onMouseEnter={() => setIsButtonHover(true)}
                            onMouseLeave={() => setIsButtonHover(false)}
                        >
                            <span className="btn">
                                <RoundButton
                                    type="button"
                                    bgColor="#03030F"
                                    hoverBgColor="#FEEF50"
                                    text={<ArrowRightIcon fill={isButtonHover ? "#000" : "#fff"} />}
                                />
                            </span>
                        </a>
                        <span className={`hoverable-text ${isButtonHover ? 'active' : ''}`}>
                            {text.en.live_btn_text?.split('').map((letter, index) => {
                                return (
                                    <span key={index} className="letters" style={{animationDelay: `calc(0.03s * ${index})`, animationTimingFunction: 'ease'}}>{letter}</span>
                                )
                            })}
                        </span>
                    </div>
                )}
            </div>
            <div className="home-screen">
                <div className="img-container">
                    <img src={work?.hover_img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default UpgradeSection
