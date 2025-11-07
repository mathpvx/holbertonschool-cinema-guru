import './dashboard.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from '../../components/navigation/Header.jsx'
import SideBar from '../../components/navigation/SideBar.jsx'

// Temporary placeholders — these will be replaced later
function HomePage() {
  return <div>Home Page</div>
}
function Favorites() {
  return <div>Favorites Page</div>
}
function WatchLater() {
  return <div>Watch Later Page</div>
}

export default function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <div className="dashboard-wrap">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <div className="dashboard-grid">
        <BrowserRouter>
          <SideBar />
          <div className="dashboard-main">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/watchlater" element={<WatchLater />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  )
}
