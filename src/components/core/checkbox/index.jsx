import './index.scss'

const Checkbox = ({name, onChange, checked}) => {
    return (
        <div className="checkbox-container">
            <label className={checked ? 'checked' : ''}>
                <span className="circle"></span>
                <span>{name}</span>
                <input onChange={e => onChange(e.target)} type="checkbox" name={name} />
            </label>
        </div>
    )
}

export default Checkbox
