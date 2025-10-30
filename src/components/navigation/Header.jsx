import './navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Header({ userUsername, setIsLoggedIn }) {
  const logout = () => {
    localStorage.removeItem('accessToken')
    setIsLoggedIn(false)
  }

  return (
    <nav className="nav-bar">
      <div className="nav-brand">Cinema Guru</div>
      <div className="nav-spacer" />
      <div className="nav-user">
        <img src="https://picsum.photos/100/100" alt="avatar" className="nav-avatar" />
        <p className="nav-welcome">Welcome, {userUsername || 'User'}</p>
        <span className="nav-logout" onClick={logout}>
          <FontAwesomeIcon icon={faRightFromBracket} />
          Logout
        </span>
      </div>
    </nav>
  )
}
