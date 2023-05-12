import './index.scss'
import {Link} from 'react-router-dom'
import {routes} from './../../../routes'
import NavigationHelper from '../../../utils/navigation'

const AllWorks = ({works}) => {
    return (
        <div className="all-works">
            <div className="all-works-container">
                {works?.map(work => {
                    return (
                        <Link data-aos="fade-up" data-aos-duration="1000" to={NavigationHelper.getNavigationUrl(routes.work.path, ':id', work?.id)} key={work?.id} className="work">
                            <div className="aspect-ratio-container">
                                <Link to={NavigationHelper.getNavigationUrl(routes.work.path, ':id', work?.id)}>
                                    <img className="cover-img" src={work?.cover_img} alt="Assaly" />
                                    <span className="name">{work?.name}</span>
                                    <span className="short-desc">{work?.translations[0]?.short_desc}</span>
                                    <div className="hover-img-container">
                                        <img className="hover-img" src={work?.hover_img} alt="Assaly" />
                                    </div>
                                </Link>
                            </div>
                            <span className="work-services">{work?.services?.map(item => item?.translations[0]?.service_name)?.join(', ')}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default AllWorks
