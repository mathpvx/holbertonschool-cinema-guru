import './auth.css'
import Input from '../../components/general/Input'
import Button from '../../components/general/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Login({ username, password, setUsername, setPassword }) {
  const [show, setShow] = useState(false)

  return (
    <div className="auth-form">
      <Input
        label="Username:"
        value={username}
        setValue={setUsername}
        icon={<FontAwesomeIcon icon={faUser} />}
      />

      <div className="pw-wrap">
        <Input
          label="Password:"
          type={show ? 'text' : 'password'}
          value={password}
          setValue={setPassword}
          icon={<FontAwesomeIcon icon={faKey} />}
        />
        <button
          type="button"
          className="pw-toggle"
          onClick={() => setShow((s) => !s)}
          aria-label="toggle password visibility"
        >
          <FontAwesomeIcon icon={show ? faEyeSlash : faEye} />
        </button>
      </div>

      <div className="auth-actions">
        <Button className="auth-btn" label="Sign In" />
      </div>
    </div>
  )
}
