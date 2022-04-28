import { useState } from 'react'

import { Link } from 'react-router-dom'
import { Amazon_Logo } from '../../Images'
import './LogIn.css'

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='login'>
      <Link to='/'>
        <img src={Amazon_Logo} alt='' className='login-logo' />
      </Link>
      <div className='login-container'>
        <h1>sign in</h1>
        <form onSubmit={handleSubmit}>
          <h5>Email</h5>
          <input
            type='text'
            placeholder='enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='text'
            placeholder='enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' className='login-signIn'>
            LogIn
          </button>
        </form>
        <p>
          By continuing, you agree to Fake Amazon's Conditions of Use and
          Privacy Notice.
        </p>
      </div>
      <p>New to Fake Amazon ?</p>
      <Link to='/register'>
        <button className='login-register'>Create your New Account</button>
      </Link>
    </div>
  )
}

export default LogIn
