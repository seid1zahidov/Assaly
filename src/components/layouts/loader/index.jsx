import './index.scss'
import LogoLight from './../../../assets/media/logo-light.svg'
import {useState} from 'react'
import useInterval from 'use-interval'

const Loader = () => {
    const [percent, setPercent] = useState(0)
    
    useInterval(() => {
        setPercent(percent + 1)
    }, percent< 100 ? 25 : null)

    return (
        <div className="loader">
            <div className="content">
                <img src={LogoLight} alt="" />
                <div className="progress-bar">
                    <div className="full">
                        <div className="filled" />
                    </div>
                    <span className="percentage">{`${percent}%`}</span>
                </div>
            </div>
        </div>
    )
}

export default Loader
