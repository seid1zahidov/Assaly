import './index.scss'
import text from './text.json'
import ApiService from './../../../api/backend'
import {useEffect, useState} from 'react'
import NavigationHelper from './../../../utils/navigation'
import Marquee from 'react-fast-marquee'

const Customers = () => {
    const [partners, setPartners] = useState([])
    const fetchData = async () => {
        try {
            const {data} = await ApiService.getPartners()
            setPartners(data?.partners)
        } catch (e) {
            NavigationHelper.navigateNotFoundPage()
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="customers">
            <h4>{text.en.customers_title}</h4>
            <div className="slider">
                <Marquee
                    speed={50}
                    gradient={false}
                >
                    {partners?.map(customer => {
                        return (
                            <div key={customer?.id} className="partners-slide">
                                <img src={customer?.logo} alt="" />
                            </div>
                        )
                    })}
                </Marquee>
            </div>
        </div>
    )
}

export default Customers
