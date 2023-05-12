import './index.scss'
import text from './text.json'

const OurProcess = ({data}) => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="agency-process">
            <h2>{data?.about_page?.translations[0]?.process_title}</h2>
            <h5>{text.en.process_title}</h5>
            <div className="processes">
                {data?.process?.map((item, index) => {
                    return (
                        <div className="process" key={index}>
                            <span className="process-name">{item?.translations[0]?.name}</span>
                            <span className="process-desc">{item?.translations[0]?.description}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OurProcess
