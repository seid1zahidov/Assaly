import TopSection from '../../components/pages/agency/TopSection'
import OurVision from '../../components/pages/agency/OurVision'
import OurTeam from '../../components/pages/agency/OurTeam'
import OurProcess from '../../components/pages/agency/OurProcess'
import Around from '../../components/pages/agency/Around'
import {useState, useEffect} from 'react'
import Loader from '../../components/layouts/loader'
import ApiService from './../../api/backend'
import {useSelector} from 'react-redux'
import NavigationHelper from './../../utils/navigation'

const Agency = () => {
    const [showCover, setShowCover] = useState(true)
    const [aboutData, setAboutData] = useState({})
    const lang = useSelector(state => state.lang.lang)

    const getData = async (lang) => {
        try {
            const {data} = await ApiService.getAboutPageData(lang)
            setAboutData(data)
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

    return showCover ? (
        <Loader /> 
    ) : (
        <>
            <TopSection data={aboutData} />
            <OurVision data={aboutData?.steps} />
            <OurTeam data={aboutData} />
            <OurProcess data={aboutData} />
            <Around data={aboutData?.around[0]} />
        </>
    )
}

export default Agency
