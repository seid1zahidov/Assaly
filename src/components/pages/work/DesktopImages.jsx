import './index.scss'
import {useEffect, useCallback, useState} from 'react'

const DesktopImages = ({images}) => {
    const deviceWidth = window.innerWidth
    const [isScrolled, setIsScrolled] = useState(false)
    const [y, setY] = useState(window.scrollY)
    const [direction, setDirection] = useState('down')
    const [up, setUp] = useState(deviceWidth > 768 ? -330 : -45)
    const [down, setDown] = useState(deviceWidth > 768 ? 16 : -6)

    const chunkIntoN = (arr, n) => {
        const size = Math.ceil(arr?.length / n);
        return Array.from({ length: n }, (v, i) =>
          arr?.slice(i * size, i * size + size)
        )
    }

    const chunkedImages = chunkIntoN(images, 3)

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

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="desktop" id="desktop-images">
            <div className="desktop-sliders">
                <div style={downStyle} className="hero-slider">
                    {chunkedImages[0]?.map((image, index) => {
                        return (
                        <img key={index} src={image} alt="" />
                        )
                    })}
                </div>
                <div style={upStyle} className="hero-slider">
                    {chunkedImages[1]?.map((image, index) => {
                        return (
                        <img key={index} src={image} alt="" />
                        )
                    })}
                </div>
                <div style={downStyle} className="hero-slider">
                    {chunkedImages[2]?.map((image, index) => {
                        return (
                        <img key={index} src={image} alt="" />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DesktopImages
