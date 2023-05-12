import './index.scss'
import TextHelper from './../../../utils/text'

const TopSection = ({data}) => {
    
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="agency-top">
            <h2 dangerouslySetInnerHTML={{__html: TextHelper.normalizeText(data?.about_page?.translations[0]?.title, data?.about_page?.translations[0]?.bold_title)}} />        
            <div className="img-container">
                <img src={data?.gif} alt="" />
            </div>
        </div>
    )
}

export default TopSection
