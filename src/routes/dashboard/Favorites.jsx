import { useEffect, useState } from 'react'
import axios from 'axios'
import './dashboard.css'
import MovieCard from '../../components/movies/MovieCard.jsx'

export default function Favorites() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    const headers = token ? { Authorization: `Bearer ${token}` } : {}
    axios
      .get('http://localhost:8000/api/titles/favorite/', { headers })
      .then((res) => setMovies(Array.isArray(res.data) ? res.data : []))
      .catch(() => setMovies([]))
  }, [])

  return (
    <div className="dashboard-section">
      <h1 style={{ color: '#e6e6e6', margin: '0 0 12px 0', fontSize: 20 }}>Movies you like</h1>
      <ul className="movie-list">
        {movies.map((m, i) => (
          <MovieCard key={m.imdbId || m.imdb_id || m.id || i} movie={m} />
        ))}
      </ul>
    </div>
  )
}
