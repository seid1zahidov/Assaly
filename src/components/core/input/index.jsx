import './index.scss'

const Input = ({label, placeholder, errorMessage, name, type, onChange}) => {
    return (
        <div className="input-container">
            <label>
                {label}
            </label>
            <input onChange={onChange} className={errorMessage ? 'error' : ''} name={name} placeholder={placeholder} type={type} />
            <span className={`error-message ${errorMessage ? 'active' : ''}`}>{errorMessage}</span>
        </div>
    )
}

export default Input
