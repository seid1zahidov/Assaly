import * as Yup from 'yup'
import text from './validationText'

const fields = {
    NAME: 'Name',
    EMAIL: 'Email',
    COMPANY: 'Company',
    INFO: 'Information'
}

const MIN_LENGTH = 2

const appealSchema = Yup.object().shape({
    name: Yup.string()
        .required(text.required(fields.NAME)),
    company_name: Yup.string()
        .required(text.required(fields.COMPANY)),
    email: Yup.string()
        .required(text.required(fields.EMAIL))
        .email(text.like_email(fields.EMAIL)),
    info: Yup.string()
        .required(text.required(fields.INFO))
        .min(MIN_LENGTH, text.length(fields.INFO, MIN_LENGTH, 'minimum'))
})

export {
    appealSchema
}
