import './index.scss'
import text from './text.json'
import TextHelper from './../../../utils/text'
import Marquee from 'react-fast-marquee'

const Hero = (data) => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="services-hero">
           <div className="hero-infos">
                <h5>{text.en.title}</h5>
                <h1 dangerouslySetInnerHTML={{__html: TextHelper.capitalizeFirstChar(TextHelper.normalizeText(data?.data?.title, data?.data?.bold_part))}} />
                <p>{data?.data?.hero_desc_1}</p>
                <p>{data?.data?.hero_desc_2}</p>
           </div>
           <div className="hero-slider">
                <div className="service-marquee-container">
                    {data?.data?.hero_slider_images?.map((item, index) => {
                        return (
                            <div key={index} className="marquee-item">
                                <img src={item} alt="" />
                            </div>
                        )
                    })}
                    {data?.data?.hero_slider_images?.map((item, index) => {
                        return (
                            <div key={index} className="marquee-item">
                                <img src={item} alt="" />
                            </div>
                        )
                    })}
                    {data?.data?.hero_slider_images?.map((item, index) => {
                        return (
                            <div key={index} className="marquee-item">
                                <img src={item} alt="" />
                            </div>
                        )
                    })}
                    {data?.data?.hero_slider_images?.map((item, index) => {
                        return (
                            <div key={index} className="marquee-item">
                                <img src={item} alt="" />
                            </div>
                        )
                    })}
                    {data?.data?.hero_slider_images?.map((item, index) => {
                        return (
                            <div key={index} className="marquee-item">
                                <img src={item} alt="" />
                            </div>
                        )
                    })}
                    {data?.data?.hero_slider_images?.map((item, index) => {
                        return (
                            <div key={index} className="marquee-item">
                                <img src={item} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="services-marquee-container">
                <Marquee
                    speed={50}
                    gradient={false}
                >
                    {data?.data?.hero_slider_images?.map((item, index) => {
                        return (
                            <div key={index} className="services-slide">
                                <img src={item} alt="" />
                            </div>
                        )
                    })}
                </Marquee>
            </div>
        </div>
    )
}

export default Hero
