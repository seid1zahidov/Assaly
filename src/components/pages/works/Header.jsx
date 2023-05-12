import './index.scss'
import TextHelper from '../../../utils/text'
import {useState, useRef, useEffect} from 'react'
import {ArrowDownIcon, CheckIcon} from './../../../icons'
import useOnClickOutside from '../../../utils/hooks/useOutsideClick'
import {useSelector, useDispatch} from 'react-redux'
import {getServices, getWorks, setSelectedService, setFilteredWorks} from '../../../store/backend'

const Title = () => {
    const [isDropdownActive, setIsDropdownActive] = useState(false)
    const selectRef = useRef(null)
    const lang = useSelector(state => state.lang.lang)
    const works = useSelector(state => state.backend.works?.works)
    const pageData = useSelector(state => state.backend.works?.page_data?.translations[0])
    const services = useSelector(state => state.backend.services)
    const selectedService = useSelector(state => state.backend.selectedService)
    const dispatch = useDispatch()

    useOnClickOutside(selectRef, () => setIsDropdownActive(false))

    const selectCategory = service => {
        dispatch(setSelectedService(service))
        setIsDropdownActive(false)
        dispatch(setFilteredWorks(works?.filter(item => item?.services.some(workService => workService?.id === service?.id))))
        
    }

    const resetFilter = () => {
        dispatch(setFilteredWorks(works))
        dispatch(setSelectedService({}))
        setIsDropdownActive(false)
    }

    const normalizeText = (full, bold) => {
        return full?.replace(bold, `<span class="bold">${bold}</span>`)
    }

    useEffect(() => {
        dispatch(getServices(lang))
        dispatch(getWorks(lang))
    }, [])

    useEffect(() => {
        dispatch(setFilteredWorks(works))
    }, [works])

    return (
        <div className="works-header">
            <div className="works-title">
                <h1 dangerouslySetInnerHTML={{__html: TextHelper.capitalizeFirstChar(normalizeText(pageData?.title, pageData?.bold_title))}} />
            </div>  
            <div ref={selectRef} className={`select ${isDropdownActive ? 'active' : ''}`}>
                <div className="selected" onClick={() => setIsDropdownActive(!isDropdownActive)}>
                    <span className="text">{Object.keys(selectedService).length > 0 && selectedService?.translations[0]?.service_name ? `${services?.find(service => service?.id === selectedService?.id)?.translations[0]?.service_name} (${works?.filter(item => item?.services.some(workService => workService?.id === selectedService?.id)).length})` : `All Project (${works?.length})`}</span>
                    <ArrowDownIcon fill={isDropdownActive ? "" : "#9E9EAA"} width={10} height={6} />
                </div>
                <ul className={`options ${isDropdownActive ? 'active' : ''}`}>
                    {services?.map(service => {
                        return (
                            <li
                                key={service?.id}
                                onClick={() => selectCategory(service)}
                            >
                                <span className="option-text">{`${service?.translations[0]?.service_name} (${works?.filter(item => item?.services.some(workService => workService?.id === service?.id)).length})`}</span>
                                {service?.id === selectedService?.id && (
                                    <span className="check-icon">
                                        <CheckIcon />
                                    </span>
                                )}
                            </li>
                        )
                    })}
                    <li onClick={resetFilter}>Reset</li>
                </ul>
            </div>         
        </div>
    )
}

export default Title
