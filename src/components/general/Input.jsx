import './general.css'

export default function Input({ label, type = 'text', className = '', value, setValue, icon, inputAttributes = {} }) {
  const handleInput = (e) => setValue && setValue(e.target.value)
  return (
    <label className={`cg-field ${className}`}>
      <span className="cg-label">
        {icon ? <span className="cg-label-icon">{icon}</span> : null}
        {label}
      </span>
      <input
        className="cg-input"
        type={type}
        value={value ?? ''}
        onChange={handleInput}
        {...inputAttributes}
      />
    </label>
  )
}
