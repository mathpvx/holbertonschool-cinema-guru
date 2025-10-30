import './auth.css'
import Input from '../../components/general/Input'
import Button from '../../components/general/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

export default function Register({ username, password, setUsername, setPassword }) {
  return (
    <div className="auth-form">
      <Input
        label="Username:"
        value={username}
        setValue={setUsername}
        icon={<FontAwesomeIcon icon={faUser} />}
      />
      <Input
        label="Password:"
        type="password"
        value={password}
        setValue={setPassword}
        icon={<FontAwesomeIcon icon={faKey} />}
      />
      <div className="auth-actions">
        <Button className="auth-btn" label="Sign Up" />
      </div>
    </div>
  )
}
