const getMinutes = minutes => {
    return minutes < 10 ? `0${minutes}` : minutes
}
const getAmPm = hour => {
    return hour >= 12 ? 'PM' : 'AM'
}

const getModifiedHour = hour => {
    return hour > 12 ? hour - 12 < 10 ? `0${hour - 12}` : hour - 12 : hour
}

const getNumberWithSign = number => {
    return number > 0 ? `+(${number})` : number
}

const getTimezoneOffset = date => {
    return `GMT${getNumberWithSign(-120 / -60)}`
}

export default {
    getMinutes,
    getAmPm,
    getModifiedHour,
    getNumberWithSign,
    getTimezoneOffset
}
