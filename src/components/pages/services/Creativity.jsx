import './index.scss'
import text from './text.json'

const Creativity = ({data}) => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="services-creativity">
            <h5>{text.en.creativity_title}</h5>
            <div className="sub-services">
                {data?.map((item, index) => {
                    return (
                        <div className="sub-service" key={index}>
                            <span className="sub-service-name">{item?.translations[0]?.title}</span>
                            <ul>
                                {item?.translations[0]?.items?.map((sub, i) => {
                                    return (
                                        <li key={i}>{sub}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Creativity
