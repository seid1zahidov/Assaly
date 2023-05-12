const isNavbarLight = path => {
    if (path === '/services/' || path.includes('/work/')) {
        return true
    }

    return false
}

const isFooterLight = path => {
    if (path === '/services/' || path === '/agency/') {
        return true
    }

    return false
}

export default {
    isNavbarLight,
    isFooterLight
}
