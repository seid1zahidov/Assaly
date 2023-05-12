import './index.scss'
import {useState} from 'react';

const RoundButton = ({type, bgColor, hoverBgColor, textColor, textHoverColor, isHoverText, isScale, text}) => {
    const [isHover, setIsHover] = useState(false)

   const handleMouseEnter = () => {
      setIsHover(true)
   }
   const handleMouseLeave = () => {
      setIsHover(false)
   }

    return (
        <button
            type={type}
            className={`round-button ${isHover && isScale ? 'scale' : ''}`}
            style={{backgroundColor: isHover && !isScale ? hoverBgColor : bgColor, color: isHover && !isScale ? textHoverColor : textColor}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <span>{(isHover && isHoverText) ? isHoverText : text}</span>
        </button>
    )
}

export default RoundButton
