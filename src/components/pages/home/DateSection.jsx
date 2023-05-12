import './index.scss'
import text from './text.json'
import {useEffect, useState} from 'react'
import {ArrowDownIcon} from './../../../icons'
import DateHelper from './../../../utils/date'

const DateSection = ({closeMenu}) => {
    const deviceWidth = window.innerWidth
    const parisOffset = 2
    const userTimezoneOffset = new Date().getTimezoneOffset() / 60
    const [date, setDate] = useState(new Date(Date.now() + (parisOffset + userTimezoneOffset) * 60 * 60 * 1000))

    const currentHour = date.getHours()
    let currentMinute = date.getMinutes()

    const handleClick = () => {
        if (deviceWidth > 768) {
            window.scrollTo(0, window.innerHeight - 80)
            return
         }
         closeMenu(false)
         window.location.href = `${process.env.REACT_APP_BASE_URL}#home-about`
    }

    const returnDate = () => {
        return `${DateHelper.getModifiedHour(currentHour)} : ${DateHelper.getMinutes(currentMinute)} ${DateHelper.getAmPm(currentHour)} ${DateHelper.getTimezoneOffset(date)}`
    }

    useEffect(() => {
        setTimeout(() => {
            setDate(new Date(Date.now() + (parisOffset + userTimezoneOffset) * 60 * 60 * 1000))
        }, 1000)
    }, [date])

    return (
        <div className="date-section">
            <span onClick={handleClick} className="select">
                <span>{text.en.select_content}</span>
                <ArrowDownIcon fill='#9E9EAA' />
            </span>
            <div className="time">{returnDate()}</div>
        </div>
    )
}

export default DateSection
