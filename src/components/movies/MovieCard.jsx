import { useEffect, useState } from 'react'
import './movies.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons'

export default function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isWatchLater, setIsWatchLater] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    const headers = token ? { Authorization: `Bearer ${token}` } : {}
    Promise.all([
      axios.get('http://localhost:8000/api/titles/favorite/', { headers }),
      axios.get('http://localhost:8000/api/titles/watchlater/', { headers }),
    ])
      .then(([favRes, wlRes]) => {
        const favs = Array.isArray(favRes.data) ? favRes.data : []
        const wls = Array.isArray(wlRes.data) ? wlRes.data : []
        const id = movie?.imdbId || movie?.imdb_id || movie?.id
        setIsFavorite(!!favs.find((m) => (m.imdbId || m.imdb_id || m.id) === id))
        setIsWatchLater(!!wls.find((m) => (m.imdbId || m.imdb_id || m.id) === id))
      })
      .catch(() => {})
  }, [movie])

  const handleClick = async (type) => {
    const token = localStorage.getItem('accessToken')
    const headers = token ? { Authorization: `Bearer ${token}` } : {}
    const id = movie?.imdbId || movie?.imdb_id || movie?.id
    if (!id) return
    const isOn = type === 'favorite' ? isFavorite : isWatchLater
    const url = `http://localhost:8000/api/titles/${type}/${id}`

    try {
      if (isOn) {
        await axios.delete(url, { headers })
      } else {
        await axios.post(url, null, { headers })
      }
      if (type === 'favorite') setIsFavorite(!isOn)
      if (type === 'watchlater') setIsWatchLater(!isOn)
    } catch (_) {}
  }

  return (
    <li className="movie-card">
      <div className="movie-head">
        <h3 className="movie-title">{movie?.title || movie?.name || 'Untitled'}</h3>
        <div className="movie-actions">
          <span
            className={`movie-action ${isFavorite ? 'active favorite' : ''}`}
            onClick={() => handleClick('favorite')}
            title="Favorite"
          >
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span
            className={`movie-action ${isWatchLater ? 'active watchlater' : ''}`}
            onClick={() => handleClick('watchlater')}
            title="Watch later"
          >
            <FontAwesomeIcon icon={faClock} />
          </span>
        </div>
      </div>
      <p className="movie-synopsis">{movie?.synopsis || movie?.plot || ''}</p>
      <div className="movie-genres">
        {(movie?.genres || []).map((g) => (
          <span key={g} className="movie-genre">{g}</span>
        ))}
      </div>
    </li>
  )
}
