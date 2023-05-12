import Home from './views/home'
import Works from './views/works'
import Services from './views/services'
import Agency from './views/agency'
import Contact from './views/contact'
import WorkInner from './views/work'
import NotFound from './views/not-found'
import Response from './views/contact-response'
import Privacy from './views/privacy'
import Cookies from './views/cookies'
import text from './text.json'

const routeItem = (title, path, component, isFooterEnabled = true, isNavbarEnabled = true) => {
    return {
        title,
        path,
        component,
        isFooterEnabled,
        isNavbarEnabled
    }
}

const routes = {
    home: routeItem(text.home, '/', Home, true, false),
    services: routeItem(text.services, '/services/', Services),
    case_studies: routeItem(text.case_studies, '/case-studies/', Works),
    agency: routeItem(text.agency, '/agency/', Agency),
    contact: routeItem(text.contact, '/contact/', Contact, false, false),
    work: routeItem(text.work, '/work/:id', WorkInner),
    response: routeItem(text.response, '/response/', Response, false, false),
    not_found: routeItem(text.not_found, '/*', NotFound, false, false),
    privacy_policy: routeItem(text.privacy_policy, '/privacy-policy/', Privacy),
    cookies: routeItem(text.cookies, '/cookies/', Cookies)
}

const routeArr = Object.values(routes)

export {
    routes,
    routeArr
}
