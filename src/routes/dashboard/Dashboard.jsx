import './dashboard.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from '../../components/navigation/Header.jsx'
import SideBar from '../../components/navigation/SideBar.jsx'
import HomePage from './HomePage.jsx'
import Favorites from './Favorites.jsx'
import WatchLater from './WatchLater.jsx'

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
