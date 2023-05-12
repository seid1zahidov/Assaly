const capitalizeFirstChar = string => {
    return string?.charAt(0).toUpperCase() + string?.slice(1).toLowerCase()
}

const normalizeText = (full, bold) => {
    return full?.replace(bold, `<span class="bold">${bold}</span>`)
}

export default {
    capitalizeFirstChar,
    normalizeText
    
}