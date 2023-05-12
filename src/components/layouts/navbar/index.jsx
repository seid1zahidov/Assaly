import './index.scss'
import data from './data.json'
import {routes} from './../../../routes'
import {Link, useLocation} from 'react-router-dom'
import Logo from './../../../assets/media/logo-black.svg'
import LogoLight from './../../../assets/media/logo-light.svg'
import {ArrowDownIcon, PlusIcon, MinusIcon} from '../../../icons'
import {useEffect, useState, useRef} from 'react'
import useOnClickOutside from '../../../utils/hooks/useOutsideClick'
import {useDispatch, useSelector} from 'react-redux'
import {setLang, setMobileMenuIsActive} from '../../../store/lang'
import {getLanguages, getSettings} from '../../../store/backend'
import DateSection from '../../pages/home/DateSection'

const Navbar = ({logo = true, isLight, classname}) => {
    const languages = useSelector(state => state.backend.languages)
    const settings = useSelector(state => state.backend.settings)
    const currentLang = useSelector(state => state.lang.lang)
    const mobileMenuIsActive = useSelector(state => state.lang.mobileMenuIsActive)
    const [langSelectIsActive, setLangSelectIsActive] = useState()
    const [menuContent, setMenuContent] = useState('')
    const [activeMenu, setActiveMenu] = useState('')
    const langRef = useRef(null)
    const location = useLocation()
    const dispatch = useDispatch()
    const isHomePage = location.pathname === routes.home.path

    useOnClickOutside(langRef, () => setLangSelectIsActive(false))

    const changeLang = lang => {
        dispatch(setMobileMenuIsActive(true))
        dispatch(setLang(lang?.locale))
        localStorage.setItem('lang', lang?.locale)
        setLangSelectIsActive(false)
    }

    const openMenu = content => {
        setMenuContent(content)
        dispatch(setMobileMenuIsActive(true))
    }

    useEffect(() => {
        data.en.menu.map(item => location.pathname.includes(item.url) && setActiveMenu(item.url))
    }, [location])

    useEffect(() => {
        dispatch(getLanguages())
        dispatch(getSettings())
        localStorage.setItem('lang', currentLang)
    }, [])

    return (
        <>
            <nav
                className={`navbar ${isLight ? 'bg-yellow' : ''} ${!logo ? 'transparent' : ''} ${classname || ''}`}
            >
                <ul className="menu">
                    {data.en.menu.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={activeMenu === item.url ? 'active' : ''}>{item.name}</Link>
                            </li>
                        )
                    })}
                </ul>
                {
                    logo && (
                        <div className="logo">
                            <Link to={routes.home.path}>
                                <img src={Logo} alt="Assaly" />
                            </Link>
                        </div>
                    )
                }
                <div className="right">
                    <div ref={langRef} className="language">
                        <span className="selected" onClick={() => setLangSelectIsActive(!langSelectIsActive)}>
                            <span className={`arrow ${langSelectIsActive ? 'rotate' : ''}`}>
                                <ArrowDownIcon />
                            </span>
                            <span>{languages?.find(item => item?.locale === currentLang)?.name}</span>
                        </span>
                        <ul className={`lang-options ${langSelectIsActive ? 'active' : ''}`}>
                            {languages?.filter(item => item?.locale !== currentLang)?.map(lang => {
                                return (
                                    <li
                                        key={lang?.id}
                                    >
                                        <button
                                            onClick={() => changeLang(lang)}
                                            className={currentLang === lang?.locale ? 'active' : ''}
                                            disabled={currentLang === lang?.locale}
                                        >
                                            {lang?.name}
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <span className="built">
                        <Link to={routes.contact.path}>{data.en.built}</Link>
                    </span>
                    {isHomePage && (
                        <>
                            <span className="phone">
                                {settings?.phone}
                            </span>
                            <span className="email">
                                <a href={`mailto: ${settings?.email}`}>{settings?.email}</a>
                            </span>
                        </>
                    )}
                </div>
            </nav>

            <nav
                className={`mobile-navbar ${classname || ''} ${!logo ? 'mob-transparent' : ''}`}
            >
                <div className={`mobile-menu-visible ${isLight ? 'bg-yellow' : ''}`}>
                    <div className="menu-opener" onClick={() => openMenu('nav')}>
                        <span>{data.en.opener}</span>
                        <PlusIcon width={7} height={7} />
                    </div>
                    {
                        logo && (
                            <div className="logo">
                                <Link to={routes.home.path}>
                                    <img src={Logo} alt="Assaly" />
                                </Link>
                            </div>
                        )
                    }
                    <div className="lang" onClick={() => openMenu('lang')}>
                            <span>{languages?.find(item => item?.locale === currentLang)?.short_name}</span>
                            <ArrowDownIcon />
                    </div>
                </div>
                <div className={`mobile-menu-content ${mobileMenuIsActive ? 'active' : ''}`}>
                    <div className="menu-header">
                        <div className="menu-opener">
                            <span></span>
                        </div>
                        <div className="logo">
                            <Link to={routes.home.path}>
                                <img src={LogoLight} alt="Assaly" />
                            </Link>
                        </div>
                        <div className="close" onClick={() => dispatch(setMobileMenuIsActive(false))}>
                                <MinusIcon />
                                <span>{data.en.close}</span>
                        </div>
                    </div>
                    <div className="menu-inner">
                        <ul className="menu-items">
                            {menuContent === 'nav' ? (
                                <>
                                    {data.en.menu.map((item, index) => {
                                        return (
                                            <li onClick={() => dispatch(setMobileMenuIsActive(false))} key={index}>
                                                <Link to={item.url} className={activeMenu === item.url ? 'active' : ''}>{item.name}</Link>
                                            </li>
                                        )
                                    })}
                                    <li onClick={() => dispatch(setMobileMenuIsActive(false))}>
                                        <Link to={routes.contact.path} className={activeMenu === '/contact/' ? 'active' : ''}>{data.en.built}</Link>
                                    </li>
                                </>
                            ) : languages?.map(lang => {
                                return (
                                    <li key={lang?.id}>
                                        <a onClick={() => changeLang(lang)} className={currentLang === lang?.locale ? 'active' : ''}>{lang?.short_name}</a>
                                        {currentLang === lang?.locale && <ArrowDownIcon fill="#ffffff" width={12} height={8} />}
                                    </li>
                                )
                            })}
                            
                        </ul>
                        <div className="menu-footer">
                            <div className="mobile-contact">
                                <span className="phone">
                                    {settings?.phone}
                                </span>
                                <span className="email">
                                    <a href={`mailto: ${settings?.email}`}>{settings?.email}</a>
                                </span>
                            </div>
                            <DateSection closeMenu={dispatch(setMobileMenuIsActive)}/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
