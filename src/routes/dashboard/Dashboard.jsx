import './dashboard.css'
import Header from '../../components/navigation/Header.jsx'

export default function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <div className="dashboard-wrap">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <div className="dashboard-surface"></div>
    </div>
  )
}
