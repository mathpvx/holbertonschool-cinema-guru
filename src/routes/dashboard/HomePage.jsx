import { useEffect, useState } from 'react'
import axios from 'axios'
import './dashboard.css'
import Filter from '../../components/movies/Filter.jsx'
import MovieCard from '../../components/movies/MovieCard.jsx'
import Button from '../../components/general/Button.jsx'

export default function HomePage() {
  const [movies, setMovies] = useState([])
  const [minYear, setMinYear] = useState(1970)
  const [maxYear, setMaxYear] = useState(2022)
  const [genres, setGenres] = useState([])
  const [sort, setSort] = useState('')
  const [title, setTitle] = useState('')
  const [page, setPage] = useState(1)

  const loadMovies = async (p = 1) => {
    const token = localStorage.getItem('accessToken')
    const headers = token ? { Authorization: `Bearer ${token}` } : {}
    const params = {
      minYear,
      maxYear,
      genres: genres.join(','),
      title,
      sort,
      page: p,
    }
    try {
      const { data } = await axios.get('http://localhost:8000/api/titles/advancedsearch', {
        params,
        headers,
      })
      const list = Array.isArray(data?.results || data) ? (data?.results || data) : []
      setMovies((prev) => (p === 1 ? list : [...prev, ...list]))
    } catch (_) {}
  }

  useEffect(() => {
    setPage(1)
    loadMovies(1)
  }, [minYear, maxYear, sort, title, genres.join(',')])

  return (
    <div className="dashboard-section">
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        sort={sort}
        setSort={setSort}
        genres={genres}
        setGenres={setGenres}
        title={title}
        setTitle={setTitle}
      />
      <ul className="movie-list">
        {movies.map((m, i) => (
          <MovieCard key={m.imdbId || m.imdb_id || m.id || i} movie={m} />
        ))}
      </ul>
      <div style={{ marginTop: 12 }}>
        <Button
          label="Load More.."
          onClick={() => {
            const next = page + 1
            setPage(next)
            loadMovies(next)
          }}
        />
      </div>
    </div>
  )
}
