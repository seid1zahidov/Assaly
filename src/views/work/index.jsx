import {useEffect, useState} from 'react'
import Hero from './../../components/pages/work/Hero'
import DesktopImages from '../../components/pages/work/DesktopImages'
import UpgradeSection from '../../components/pages/work/UpgradeSection'
import WorkSlider from '../../components/pages/work/WorkSlider'
import RelatedSection from '../../components/pages/work/RelatedSection'
import FeedbackSection from '../../components/pages/work/FeedbackSection'
import NextSection from '../../components/pages/work/NextSection'
import Loader from '../../components/layouts/loader'
import ApiService from './../../api/backend'
import {useSelector} from 'react-redux'
import NavigationHelper from './../../utils/navigation'

const WorkInner = () => {
    const [bgColor, setBgColor] = useState('#feef50')
    const [showCover, setShowCover] = useState(true)
    const [work, setWork] = useState({})
    const [nextWork, setNextWork] = useState({})
    const splitedUrl = window.location.pathname.split('/')
    const workId = splitedUrl[splitedUrl.length - 1]
    const lang = useSelector(state => state.lang.lang)

    const getData = async (lang, id) => {
        try {
            const {data} = await ApiService.getWork(lang, id)
            setWork(data?.work)
        } catch (e) {
            NavigationHelper.navigateNotFoundPage()
        }
    }

    const getNextData = async (lang, id) => {
        try {
            const {data} = await ApiService.getWork(lang, id)
            setNextWork(data?.work)
        } catch (e) {
            NavigationHelper.navigateNotFoundPage()
        }
    }

    useEffect(() => {
        getData(lang, workId)
        window.scrollTo(0, 0)
        setTimeout(() => {
            setBgColor('transparent')
        }, 4000)

        setTimeout(() => {
            setShowCover(false)
        }, 3000)
    }, [])

    useEffect(() => {
        work?.next_id && getNextData(lang, work?.next_id)
    }, [work])

    return showCover ? (
        <Loader />
    ) : (
        <div style={{backgroundColor: bgColor}}>
            <Hero work={work} />
            <DesktopImages images={work?.desktop_images} />
            <UpgradeSection work={work} />
            <RelatedSection work={work} />
            <WorkSlider data={work?.slider_images} />
            <FeedbackSection data={work?.clients_feedback[0]} />
            <DesktopImages work={work?.mo_images} />
            <NextSection work={nextWork} />
        </div>
    )
}

export default WorkInner
