import { useState } from 'react'
import './movies.css'

export default function Tag({ genre, filter = false, genres = [], setGenres }) {
  const [selected, setSelected] = useState(false)

  const handleTag = () => {
    if (!setGenres) return
    if (selected) {
      setGenres(genres.filter((g) => g !== genre))
      setSelected(false)
    } else {
      setGenres([...genres, genre])
      setSelected(true)
    }
  }

  return (
    <li
      className={`tag-item ${filter ? 'filter' : ''} ${selected ? 'selected' : ''}`}
      onClick={handleTag}
    >
      {genre}
    </li>
  )
}
