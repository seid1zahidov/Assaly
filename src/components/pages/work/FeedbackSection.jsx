import './index.scss'

const FeedbackSection = ({data}) => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="client-feedback">
            <p>{data?.translations[0]?.feedback}</p>
            <div className="client-infos">
                {/* <img src={data?.img} alt="" /> */}
                <div>
                    <span>{data?.name}</span>
                    <span>{data?.translations[0]?.position}</span>
                </div>
            </div>
            <div className="percents">
                {data?.percents?.map((item, index) => {
                    return (
                        <div key={index} className="percent-box">
                            <span className="percent">{`${item?.percent}%`}</span>
                            <span className="name">{item?.translations[0]?.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FeedbackSection
