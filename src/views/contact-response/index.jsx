import './index.scss'
import text from './text.json'
import {Link} from 'react-router-dom'
import {routes} from '../../routes'
import AppealFormFooter from '../../components/pages/contact/AppealFormFooter'

const Response = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const success = queryParameters.get("success")

  return (
    <>
      <div className="response-container">
        <div className="response">
          <span className="pin-circle" />
          <span className="pin-circle" />
          <span className="pin-circle" />
          <span className="pin-circle" />
          <span className="motto">{success === 'true' ? text.en.motto : text.en.error_motto}</span>
          <span className="message">{success === 'true' ? text.en.message : text.en.error_message}</span>
          <span className="let">{success === 'true' ? text.en.let : text.en.error_let}</span>

          <Link
            to={routes.home.path}
            className="response-btn"
            dangerouslySetInnerHTML={{ __html: text.en.btn_text }}
          />
        </div>
      </div>
      <AppealFormFooter />
    </>
  )
}

export default Response
