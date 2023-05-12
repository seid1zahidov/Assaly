import axios from '../api'

const getLanguages = () => {
    return axios.get('homepage/languages')
}

const getSettings = () => {
    return axios.get('homepage/settings')
}

const getSocials = () => {
    return axios.get('homepage/socials')
}

const getPartners = () => {
    return axios.get('homepage/partners')
}

const getCustomers = locale => {
    return axios.get(`feedbacks?locale=${locale}`)
}

const getHomePageData = locale => {
    return axios.get(`homepage?locale=${locale}`)
}

const getAboutPageData = locale => {
    return axios.get(`about?locale=${locale}`)
}

const sendAppeal = data => {
    return axios.post('contact', data)
}

const getWorks = locale => {
    return axios.get(`works?locale=${locale}`)
}

const getServices = locale => {
    return axios.get(`services?locale=${locale}`)
}

const getWork = (locale, id) => {
    return axios.get(`works/${id}?locale=${locale}`)
}

export default {
    getLanguages,
    getSettings,
    getSocials,
    getPartners,
    getCustomers,
    getHomePageData,
    getAboutPageData,
    sendAppeal,
    getWorks,
    getServices,
    getWork
}