import './index.scss'
import text from './text.json'

const OurTeam = ({data}) => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="agency-team">
            <div className="team-header">
                <div className="empty"/>
                <div className="titles">
                    <h2>{text.en.team_main_title}</h2>
                    <div>{data?.about_page?.translations[0]?.our_team_title}</div>
                </div>
            </div>
            <div className="members">
                {data?.our_team?.map((item, index) => {
                    return (
                        <div className="member" key={index}>
                            <img src={item?.image} alt="" />
                            <span className="member-name">{item?.name}</span>
                            <span className="member-position">{item?.position}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OurTeam
