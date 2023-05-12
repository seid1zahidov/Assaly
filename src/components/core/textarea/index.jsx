import './index.scss'

const Textarea = ({label, placeholder, errorMessage, name, type, onChange}) => {
    return (
        <div className="textarea-container">
            <label>
                {label}
            </label>
            <textarea onChange={onChange} className={errorMessage ? 'error' : ''} name={name} placeholder={placeholder} type={type} />
            <span className={`error-message ${errorMessage ? 'active' : ''}`}>{errorMessage}</span>
        </div>
    )
}

export default Textarea
