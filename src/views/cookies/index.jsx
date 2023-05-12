import './index.scss'
import data from './data.json'
import Loader from '../../components/layouts/loader'
import {useState, useEffect} from 'react'

const Cookies = () => {
    const [showCover, setShowCover] = useState(true)

    useEffect(() => {   
        window.scrollTo(0, 0)     
        setTimeout(() => {
            setShowCover(false)
        }, 3000)
    }, [])

    return showCover ? (
        <Loader /> 
    ) : (
        <main className="cookies">
            <h1>{data.en.title}</h1>
            <div className="body">
                {data.en.cookies}
            </div>
        </main>
    )
}

export default Cookies
