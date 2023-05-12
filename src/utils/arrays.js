const addElementToArray = (array, element) => {
    array.push(element)
    return array
}

const removeElementFromArray = (array, element) => {
    let index = array.indexOf(element)
    if (index > -1) {
    array.splice(index, 1)
    return array
}
}

export default {
    addElementToArray,
    removeElementFromArray
}
