import './index.scss'
import text from './text.json'
import RoundButton from '../../core/buttons/RoundButton'
import {Link} from 'react-router-dom'
import {PlusIcon} from './../../../icons'
import {useEffect, useState} from 'react'
import {routes} from './../../../routes'
import NavigationHelper from './../../../utils/navigation'
import {useSelector, useDispatch} from 'react-redux'
import {getWorks} from '../../../store/backend'

const WorksSection = ({setBgColor}) => {
    const dispatch = useDispatch()
    const works = useSelector(state => state.backend.works?.works)
    const lang = useSelector(state => state.lang.lang)
    const [isButtonHover, setIsButtonHover] = useState(false)

    useEffect(() => {
        dispatch(getWorks())
    }, [lang])
    return (
        <div className="works">
            <div className="works-container">
                {works?.filter(item => item?.show_home === 1)?.slice(-2).map(work => {
                    return (
                        <div
                            key={work?.id}
                            className="work"
                            onMouseEnter={() => setBgColor(work?.primary_color)}
                            onMouseLeave={() => setBgColor('')}
                        >
                            <div className="aspect-ratio-container">
                                <Link to={NavigationHelper.getNavigationUrl(routes.work.path, ':id', work?.id)}>
                                    <img className="cover-img" src={work?.cover_img} alt="Assaly" />
                                    <span className="name">{work?.name}</span>
                                    <span className="short-desc">{work?.translations[0]?.short_desc}</span>
                                    <div className="hover-img-container">
                                        <img className="hover-img" src={work?.hover_img} alt="Assaly" />
                                    </div>
                                </Link>
                            </div>
                            <span className="work-services">{work?.services?.map(item => item?.translations[0]?.service_name)?.join(', ')}</span>
                        </div>
                    )
                })}
            </div>
            <span className="btn">
                <Link
                    to={routes.case_studies.path}
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
                    {text.en.works_button_text?.split('').map((letter, index) => {
                        return (
                            <span key={index} className="letters" style={{animationDelay: `calc(0.03s * ${index})`, animationTimingFunction: 'ease'}}>{letter}</span>
                        )
                    })}
                </span>
            </span>
        </div>
    )
}

export default WorksSection
