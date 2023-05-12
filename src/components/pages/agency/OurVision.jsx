import './index.scss'
import text from './text.json'

const OurVision = ({data}) => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="agency-vision">
            <h2>{text.en.our_vision}</h2>
            <h5>{text.en.steps_title.map(step => <span>{step}</span>)}</h5>
            <div className="steps">
                {data?.map((item, index) => {
                    return (
                        <div className="step" key={index}>
                            <span className="step-name">{item?.translations[0]?.name}</span>
                            <span className="step-desc">{item?.translations[0]?.description}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OurVision
