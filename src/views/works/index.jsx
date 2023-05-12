import AllWorks from "../../components/pages/works/AllWorks"
import Header from "../../components/pages/works/Header"
import {useEffect, useState} from "react"
import Loader from "../../components/layouts/loader"
import {getWorks} from "../../store/backend"
import {useDispatch, useSelector} from "react-redux"

const Works = () => {
    const [showCover, setShowCover] = useState(true)
    const dispatch = useDispatch()
    const lang = useSelector(state => state.lang.lang)
    const works = useSelector(state => state.backend.filteredWorks)

    useEffect(() => {
        dispatch(getWorks(lang))
        window.scrollTo(0, 0)

        setTimeout(() => {
            setShowCover(false)
        }, 3000)
    }, [])
    return showCover ? (
        <Loader />
    ) : (
        <div data-aos="fade-up" data-aos-duration="1000">
            <Header />
            <AllWorks works={works} />
        </div>
    )
}

export default Works
