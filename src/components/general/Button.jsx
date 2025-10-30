import './general.css'

export default function Button({ label, className = '', onClick, icon }) {
  return (
    <button className={`cg-button ${className}`} onClick={onClick}>
      {icon ? <span className="cg-btn-icon">{icon}</span> : null}
      <span>{label}</span>
    </button>
  )
}