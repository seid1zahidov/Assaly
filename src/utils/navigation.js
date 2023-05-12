const getNavigationUrl = (url, params, value) => {
    return url.replace(params, value)
}

const navigateNotFoundPage = () => {
    window.location.href = `${process.env.REACT_APP_BASE_URL}not-found`
}

export default {
    getNavigationUrl,
    navigateNotFoundPage
}
