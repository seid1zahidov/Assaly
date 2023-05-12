const text = {
    required: field => `${field} is required`,
    like_email: field => `${field} must match to email format`,
    length: (field, length, type) => `${field} field must be ${type} ${length} chars`
}

export default text
