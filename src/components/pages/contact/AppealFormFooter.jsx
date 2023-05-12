import './index.scss'
import text from './text.json'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {getSettings} from '../../../store/backend'

const AppealFormFooter = () => {
    const settings = useSelector(state => state.backend.settings)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSettings())
    }, [])
    return (
        <div className="form-footer">
            <div className="footer-head">
                <span>{text.en.visit}</span>
                <span>{text.en.contact}</span>
            </div>
            <div className="footer-data">
                <span className="footer-address">
                    <span>{settings?.address}</span>
                    <span>{settings?.city}</span>
                    <span>{settings?.country}</span>
                </span>
                <span className="footer-contact">
                    <span>{settings?.phone}</span>
                    <span>
                        <a href={`mailto:${settings?.email}`}>{settings?.email}</a>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default AppealFormFooter
