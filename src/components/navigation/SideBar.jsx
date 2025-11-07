import './navigation.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Activity from '../Activity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faHeart, faClock } from '@fortawesome/free-solid-svg-icons'

export default function SideBar() {
  const [selected, setSelected] = useState('home')
  const [small, setSmall] = useState(true)
  const [activities, setActivities] = useState([])
  const [showActivities, setShowActivities] = useState(false)
  const navigate = useNavigate()

  const setPage = (pageName) => {
    setSelected(pageName)
    if (pageName === 'home') navigate('/home')
    if (pageName === 'favorites') navigate('/favorites')
    if (pageName === 'watchlater') navigate('/watchlater')
  }

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    axios
      .get('http://localhost:8000/api/activity', {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      })
      .then((res) => setActivities(Array.isArray(res.data) ? res.data : []))
      .catch(() => setActivities([]))
  }, [])

  return (
    <nav className={`side-nav ${small ? 'side-nav--small' : ''}`}>
      <ul className="side-links">
        <li
          className={`side-link ${selected === 'home' ? 'active' : ''}`}
          onClick={() => setPage('home')}
        >
          <FontAwesomeIcon icon={faHouse} />
          <span>Home</span>
        </li>
        <li
          className={`side-link ${selected === 'favorites' ? 'active' : ''}`}
          onClick={() => setPage('favorites')}
        >
          <FontAwesomeIcon icon={faHeart} />
          <span>Favorites</span>
        </li>
        <li
          className={`side-link ${selected === 'watchlater' ? 'active' : ''}`}
          onClick={() => setPage('watchlater')}
        >
          <FontAwesomeIcon icon={faClock} />
          <span>Watch Later</span>
        </li>
      </ul>

      <div className="side-activities">
        <div
          className="side-activities-head"
          onClick={() => setShowActivities((v) => !v)}
        >
          <span>Recent Activity</span>
          <span className="side-activities-toggle">{showActivities ? '−' : '+'}</span>
        </div>
        {showActivities ? (
          <ul className="activity-list">
            {activities.slice(0, 10).map((a, idx) => (
              <Activity key={a?.id ?? idx} activity={a} />
            ))}
          </ul>
        ) : null}
      </div>
    </nav>
  )
}
