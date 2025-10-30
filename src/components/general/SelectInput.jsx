import './general.css'

export default function SelectInput({ label, options = [], className = '', value, setValue }) {
  const handleSelect = (e) => setValue && setValue(e.target.value)
  return (
    <label className={`cg-field ${className}`}>
      <span className="cg-label">{label}</span>
      <select className="cg-select" value={value ?? ''} onChange={handleSelect}>
        {options.map((opt) => {
          if (typeof opt === 'string') {
            return (
              <option key={opt} value={opt}>
                {opt}
              </option>
            )
          }
          const key = opt.value ?? opt.label
          return (
            <option key={key} value={opt.value}>
              {opt.label ?? opt.value}
            </option>
          )
        })}
      </select>
    </label>
  )
}
