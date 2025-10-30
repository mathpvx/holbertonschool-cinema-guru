import { useState } from 'react'
import './auth.css'
import Login from './Login'
import Register from './Register'

export default function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="auth-wrap">
      <form className="auth-card">
        <div className="auth-tabs">
          <button
            type="button"
            className={`auth-tab ${_switch ? 'active' : ''}`}
            onClick={() => setSwitch(true)}
          >
            Sign In
          </button>
          <button
            type="button"
            className={`auth-tab ${!_switch ? 'active' : ''}`}
            onClick={() => setSwitch(false)}
          >
            Sign Up
          </button>
        </div>

        <div className="auth-body">
          <h2 className="auth-title">
            {_switch ? 'Sign in with your account' : 'Create a new account'}
          </h2>

          {_switch ? (
            <Login
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          ) : (
            <Register
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          )}
        </div>
      </form>
    </div>
  )
}
