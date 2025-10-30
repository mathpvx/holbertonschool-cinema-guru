import './general.css'

export default function SearchBar({ title, setTitle, className = '', inputAttributes = {} }) {
  const handleInput = (e) => setTitle && setTitle(e.target.value)
  return (
    <div className={`cg-search ${className}`}>
      <input
        className="cg-search-input"
        type="text"
        placeholder="Search Movies"
        value={title ?? ''}
        onChange={handleInput}
        {...inputAttributes}
      />
    </div>
  )
}
