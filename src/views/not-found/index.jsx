import './index.scss'
import text from './text.json'
import {Link} from 'react-router-dom'
import {routes} from './../../routes'

const NotFound = () => {
  return (
    <div className="not-found">
        <span className="motto">{text.en.motto}</span>
        <span className="message">{text.en.message}</span>
        <span className="let">{text.en.let}</span>
        
        <Link
            to={routes.home.path}
            className="not-found-btn"
            dangerouslySetInnerHTML={{__html: text.en.btn_text}}
        />
    </div>
  )
}

export default NotFound
