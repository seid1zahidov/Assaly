import './index.scss'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {routeArr} from './routes'
import Navbar from './components/layouts/navbar'
import Footer from './components/layouts/footer'
import {useEffect} from 'react'
import PathHelper from './utils/path'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {

    useEffect(() => {
        AOS.init()
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {routeArr.map((item, index) => (
                        <Route index exact path={item.path} key={index} element={
                            <>
                                {item.isNavbarEnabled && <Navbar isLight={PathHelper.isNavbarLight(item.path)} />}
                                <item.component/>
                                {item.isFooterEnabled && <Footer isLight={PathHelper.isFooterLight(item.path)} />}
                            </>
                        }/>
                    ))}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
