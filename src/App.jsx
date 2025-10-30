import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Dashboard from './routes/dashboard/Dashboard.jsx'
import Authentication from './routes/auth/Authentication.jsx'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userUsername, setUserUsername] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (!token) return
    axios
      .post('http://localhost:8000/api/auth/', null, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const username = res?.data?.username ?? res?.data?.user?.username ?? ''
        setIsLoggedIn(true)
        setUserUsername(username)
      })
      .catch(() => {})
  }, [])

  return isLoggedIn ? (
    <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
  ) : (
    <Authentication
      setIsLoggedIn={setIsLoggedIn}
      setUserUsername={setUserUsername}
    />
  )
}
