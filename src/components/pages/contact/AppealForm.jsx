import './index.scss'
import Input from './../../core/input'
import Textarea from './../../core/textarea'
import Checkbox from './../../core/checkbox'
import {useState} from 'react'
import {Formik} from 'formik'
import {appealSchema} from './../../../utils/validation'
import ArrayHelper from './../../../utils/arrays'
import {CloseIcon} from './../../../icons'
import {Link} from 'react-router-dom'
import {routes} from './../../../routes'
import text from './text.json'
import ApiService from './../../../api/backend'

const AppealForm = ({services}) => {
    const [isBtnHovered, setIsBtnHovered] = useState(false)
    const [initialFormValues, setInitialFormValues] = useState({
        name: '',
        company_name: '',
        email: '',
        info: '',
        services: []
    })

    const names = {
        name: 'name',
        company_name: 'company_name',
        email: 'email',
        info: 'info'
    }    

    const selectService = target => {
        setInitialFormValues({...initialFormValues, services: target.checked ? ArrayHelper.addElementToArray(initialFormValues.services, target.name) : ArrayHelper.removeElementFromArray(initialFormValues.services, target.name)})
    }

    const sendAppeal = async (values, {setFieldError, resetForm}) => {
        try {
            const {data} = await ApiService.sendAppeal({...values, services: values.services.join(',')})
            window.location.href = `${process.env.REACT_APP_BASE_URL}response?success=true`
        } catch (e) {
            window.location.href = `${process.env.REACT_APP_BASE_URL}response?success=false`
        }
    }

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="contact-container">
            <div className="contact-form">
                <span className="pin-circle" />
                <span className="pin-circle" />
                <span className="pin-circle" />
                <span className="pin-circle" />
                <div className="contact-title">
                    {text.en.title}
                    <Link to={routes.home.path}>
                        <CloseIcon />
                    </Link>
                </div>

                <Formik
                    enableReinitialize={true}
                    initialValues={initialFormValues}
                    onSubmit={sendAppeal}
                    validationSchema={appealSchema}
                    validateOnBlur={false}
                    validateOnChange={false}
                >
                    {({values, errors, handleChange, handleSubmit, setFieldValue}) => (
                        <form onSubmit={handleSubmit}>
                            <div className="inputs-container">
                                <div className="row">
                                    <Input
                                        label={text.en.name_input_label}
                                        placeholder={text.en.name_input_placeholder}
                                        type="text"
                                        name={names.name}
                                        value={values.name}
                                        onChange={e => handleChange(e)}
                                        errorMessage={errors.name}
                                    />
                                    <Input
                                        label={text.en.company_input_label}
                                        placeholder={text.en.company_input_placeholder}
                                        type="text"
                                        name={names.company_name}
                                        value={values.company_name}
                                        onChange={e => handleChange(e)}
                                        errorMessage={errors.company_name}
                                    />
                                    <Input
                                        label={text.en.email_input_label}
                                        placeholder={text.en.email_input_placeholder}
                                        type="email"
                                        name={names.email}
                                        value={values.email}
                                        onChange={e => handleChange(e)}
                                        errorMessage={errors.email}
                                    />
                                </div>
                                <div className="row">
                                    <div className="form-select">
                                        <span className='select-title'>{text.en.services_input_label}</span>
                                        {services?.map((service, i) => {
                                            return (
                                                <Checkbox
                                                    key={i}
                                                    onChange={selectService}
                                                    name={service?.translations[0]?.service_name}
                                                    checked={initialFormValues.services?.includes(service?.translations[0]?.service_name)}
                                                />
                                            )
                                        })}
                                    </div>
                                    <Textarea
                                        label={text.en.info_input_label}
                                        placeholder={text.en.info_input_placeholder}
                                        name={names.info}
                                        value={values.info}
                                        onChange={e => handleChange(e)}
                                        errorMessage={errors.info}
                                    />
                                </div>
                            </div>
                            <button
                                className="contact-btn"
                                type='submit'
                                onMouseEnter={() => setIsBtnHovered(true)}
                                onMouseLeave={() => setIsBtnHovered(false)}
                            >
                                {isBtnHovered ? text.en.btn_hover_text : text.en.btn_text}
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default AppealForm
