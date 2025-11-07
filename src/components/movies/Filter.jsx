import './movies.css'
import SearchBar from '../general/SearchBar'
import Input from '../general/Input'
import SelectInput from '../general/SelectInput'
import Tag from './Tag'

const GENRES = [
  'action','drama','comedy','biography','romance','thriller','war','history',
  'sport','sci-fi','documentary','crime','fantasy'
]

const SORT_OPTIONS = [
  { value: '', label: 'default' },
  { value: 'latest', label: 'latest' },
  { value: 'oldest', label: 'oldest' },
  { value: 'highestrated', label: 'highestrated' },
  { value: 'lowestrated', label: 'lowestrated' }
]

export default function Filter({
  minYear, setMinYear,
  maxYear, setMaxYear,
  sort, setSort,
  genres, setGenres,
  title, setTitle
}) {
  return (
    <div className="movies-filter">
      <SearchBar title={title} setTitle={setTitle} />
      <div className="movies-filter-inline">
        <Input label="Min Year" type="number" value={minYear} setValue={setMinYear} />
        <Input label="Max Year" type="number" value={maxYear} setValue={setMaxYear} />
        <SelectInput label="Sort" options={SORT_OPTIONS} value={sort} setValue={setSort} />
      </div>
      <ul className="tag-list">
        {GENRES.map((g) => (
          <Tag key={g} genre={g} filter genres={genres} setGenres={setGenres} />
        ))}
      </ul>
    </div>
  )
}
