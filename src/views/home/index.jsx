import './index.scss'
import Hero from "../../components/pages/home/Hero"
import DateSection from "../../components/pages/home/DateSection"
import Title from "../../components/pages/home/Title"
import WorksSection from "../../components/pages/home/WorksSection"
import GifSection from "../../components/pages/home/GifSection"
import Services from "../../components/pages/home/Services"
import Customers from "../../components/pages/home/Customers"
import Navbar from "./../../components/layouts/navbar"
import {useState, useEffect} from "react"
import Loader from '../../components/layouts/loader'
import ApiService from './../../api/backend'
import {useSelector} from 'react-redux'
import NavigationHelper from './../../utils/navigation'

const Home = () => {
    const deviceWidth = window.innerWidth
    const [hompageData, setHomepageData] = useState({})
    const [bgColor, setBgColor] = useState('')
    const [showCover, setShowCover] = useState(true)
    const lang = useSelector(state => state.lang.lang)
    const decrease = useSelector(state => state.lang.decrease)
    const mobileMenuIsActive = useSelector(state => state.lang.mobileMenuIsActive)

    const getData = async (lang) => {
        try {
            const {data} = await ApiService.getHomePageData(lang)
            setHomepageData(data)
        } catch (e) {
            NavigationHelper.navigateNotFoundPage()
        }
    }

    useEffect(() => {   
        window.scrollTo(0, 0)     
        setTimeout(() => {
            setShowCover(false)
        }, 3000)
    }, [])

    useEffect(() => {
        getData(lang)
    }, [lang])

    useEffect(() => {
        if(mobileMenuIsActive) {
            window.scrollTo(0, 0)
            document.body.style.maxHeight = '100vh'
            document.body.style.overflow = 'hidden'
            return
        }
        document.body.style.maxHeight = 'unset'
        document.body.style.overflow = 'unset'

    }, [mobileMenuIsActive])

    return showCover ? (
        <Loader />
    ) : (
        <div className="home-container" style={{backgroundColor: bgColor}}>
            <div data-aos="fade-up" data-aos-duration="1000">
                <Hero bg={bgColor} data={hompageData} />
                <Navbar classname={decrease ? 'decrease' : ''} logo={false} />
            </div>
            {deviceWidth > 768 ? (
                <>
                    <DateSection />
                    <div data-aos="fade-up" data-aos-duration="400">
                        <Title data={hompageData?.home_page?.translations[0]} />
                        <WorksSection setBgColor={setBgColor}/>
                    </div>
                </>
            ) : (
                <>
                    <div style={{visibility: mobileMenuIsActive ? 'hidden' : 'visible'}} className="mobile-mini" data-aos="fade-up" data-aos-duration="400">
                        <Title data={hompageData?.home_page?.translations[0]} />
                        <DateSection />
                    </div>
                    <WorksSection setBgColor={setBgColor}/>
                </>
            )}
            {hompageData?.gif && <GifSection gif={hompageData?.gif} />}
            <Services />
            <Customers />
        </div>
    )
}

export default Home
