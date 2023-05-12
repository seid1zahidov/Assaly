import './index.scss'

const RelatedSection = ({work}) => {

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="related-images">
            <div className="rel-container">
            <div className="black-bg">
                <div className="rel-img">
                    <img src={work?.related_overlay_images[0]} alt="" />
                </div>
            </div>
            </div>
            <div className="rel-container">
                <div className="img-bg" style={{backgroundImage: `url(${work?.related_background_image})`}}>
                    <div className="rel-img">
                        <img src={work?.related_overlay_images[1]} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedSection
