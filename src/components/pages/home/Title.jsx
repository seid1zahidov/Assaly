import './index.scss'
import text from './text.json'
import RoundButton from './../../core/buttons/RoundButton'
import TextHelper from './../../../utils/text'
import {PlusIcon} from '../../../icons'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {routes} from './../../../routes'

const Title = ({data}) => {
    const [isButtonHover, setIsButtonHover] = useState(false)

    const normalizeText = (full, bold) => {
        return full?.replace(bold, `<span class="bold">${bold}</span>`)
    }

    return (
        <div className="title" id="home-about">
            <h1 dangerouslySetInnerHTML={{__html: TextHelper.capitalizeFirstChar(normalizeText(data?.light_text, data?.bold_text))}} />
            <div className="title-bottom">
                <div className="descs">
                    {data?.desc1 && <span>{data?.desc1}</span>}
                    {data?.desc2 && <span>{data?.desc2}</span>}
                </div>
                <span className="btn">
                <Link
                    to={routes.agency.path}
                    onMouseEnter={() => setIsButtonHover(true)}
                    onMouseLeave={() => setIsButtonHover(false)}
                >
                    <RoundButton
                        type="button"
                        bgColor="#03030F"
                        hoverBgColor="#FEEF50"
                        textColor="#FFFFFF"
                        textHoverColor="#03030F"
                        text={<PlusIcon fill={!isButtonHover && 'white'} />}
                    />
                </Link>
                <span className={`hoverable-text ${isButtonHover ? 'active' : ''}`}>
                    {text.en.agency_button_text?.split('').map((letter, index) => {
                        return (
                            <span key={index} className="letters" style={{animationDelay: `calc(0.03s * ${index})`, animationTimingFunction: 'ease'}}>{letter}</span>
                        )
                    })}
                </span>
            </span>
            </div>
        </div>
    )
}

export default Title
