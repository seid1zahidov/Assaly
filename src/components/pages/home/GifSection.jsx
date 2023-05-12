import './index.scss'
import React, {useRef, useEffect, useState, useCallback} from "react"

const GifSection = ({gif}) => {
  const gifRef = useRef(null)
  const [y, setY] = useState(window.scrollY)
  const [direction, setDirection] = useState('down')
  const [grow, setGrow] = useState(40)
  let style = {
    width: `${grow}%`
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

  useEffect(() => {
    const diff = gifRef.current.offsetTop - window.pageYOffset
    const onScroll = () => {
      if (direction === 'down') {
        diff < 800 && grow < 100 && setGrow(grow + 8)
        return
      }
      diff > 0 && grow > 40 && setGrow(grow - 8)
    }

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

    return (
        <div ref={gifRef} className="gif" style={style}>
            <div className="container">
                <img src={gif} alt="Assaly" />
            </div>
        </div>
    )
}

export default GifSection
