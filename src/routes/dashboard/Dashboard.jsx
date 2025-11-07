import './dashboard.css'
import Header from '../../components/navigation/Header.jsx'
import SideBar from '../../components/navigation/SideBar.jsx'

export default function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <div className="dashboard-wrap">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <div className="dashboard-grid">
        <SideBar />
        <div className="dashboard-main"></div>
      </div>
    </div>
  )
}
