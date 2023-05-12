import './index.scss'
import data from './data.json'
import Loader from '../../components/layouts/loader'
import {useState, useEffect} from 'react'

const Privacy = () => {
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
        <main className="privacy">
            <h1>{data.en.title}</h1>
            <div className="body">
                {data.en.policies.map((item, index) => {
                    return (
                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default Privacy
