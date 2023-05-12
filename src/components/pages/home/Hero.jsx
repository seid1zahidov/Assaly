import './index.scss'
import text from './text.json'
import {useEffect, useCallback, useState} from 'react'
import RoundButton from '../../core/buttons/RoundButton'
import {PlusIcon} from './../../../icons'
import {Link} from 'react-router-dom'
import {routes} from './../../../routes'
import {useSelector, useDispatch} from 'react-redux'
import {setDecrease} from '../../../store/lang'

const Hero = ({bg, data}) => {
    const deviceWidth = window.innerWidth
    const dispatch = useDispatch()
    const [isScrolled, setIsScrolled] = useState(false)
    const [y, setY] = useState(window.scrollY)
    const [direction, setDirection] = useState('down')
    const [up, setUp] = useState(deviceWidth > 768 ? -330 : -45)
    const [down, setDown] = useState(deviceWidth > 768 ? 16 : -6)
    const decrease = useSelector(state => state.lang.decrease)

    let upStyle = {
        transform: `translateY(${up}px)`
    }
    let downStyle = {
        transform: `translateY(${down}px)`
    }

    const handleNavigation = useCallback(
        e => {
          const window = e.currentTarget
          if (y > window.scrollY) {
            setDirection('up')
          } else if (y < window.scrollY) {
            setDirection('down')
          }
          setY(window.scrollY)
        }, [y]
    )

    const onScroll = () => {
        !isScrolled && setIsScrolled(true)
        if (window.pageYOffset > window.innerHeight) {
            dispatch(setDecrease(true))
        }
        if (window.pageYOffset !== 0) {
            if (direction === 'down') {
                setUp(up + 5)
                setDown(down - 5)
                return
            }
            setUp(up - 5)
            setDown(down + 5)
            return
        }
        setUp(deviceWidth > 768 ? -330 : -45)
        setDown(deviceWidth > 768 ? 16 : -6)
    }

    useEffect(() => {    
          window.addEventListener('scroll', onScroll)
          return () => window.removeEventListener('scroll', onScroll)
    }, [window.pageYOffset, direction])
    
    useEffect(() => {
        setY(window.scrollY)
        window.addEventListener("scroll", handleNavigation)
      
        return () => {
          window.removeEventListener("scroll", handleNavigation)
        }
    }, [handleNavigation])

    useEffect(() => {
        setTimeout(() => {
            dispatch(setDecrease(true))
        }, 500);
    }, [])

    return (
        <div className={`hero ${decrease ? 'decrease-height' : ''}`}>
            <div className="sliders">
                <div style={downStyle} className="hero-slider">
                    {data?.hero_images1?.map((item, index) => {
                        return (
                            <img src={item?.original_url} alt="" key={index} />
                        )
                    })}
                </div>
                <div style={upStyle} className="hero-slider">
                    {data?.hero_images2?.map((item, index) => {
                        return (
                            <img src={item?.original_url} alt="" key={index} />
                        )
                    })}
                </div>
                <div style={downStyle} className="hero-slider">
                    {data?.hero_images3?.map((item, index) => {
                        return (
                            <img src={item?.original_url} alt="" key={index} />
                        )
                    })}
                </div>
            </div>
            <div className="transparent-container">
                <Link to={routes.contact.path}>
                    <span className="btn">
                        <RoundButton
                            type="button"
                            bgColor="#FEEF50"
                            hoverBgColor="#03030F"
                            textColor="#03030F"
                            textHoverColor="#FFFFFF"
                            text={<PlusIcon/>}
                            isScale={true}
                            isHoverText={text.en.hover_text}
                        />
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Hero
