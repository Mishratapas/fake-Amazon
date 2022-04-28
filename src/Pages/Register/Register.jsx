import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Amazon_Logo } from '../../Images'
import './Register.css'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='register'>
      <img src={Amazon_Logo} alt='' className='register-logo' />
      <div className='register-container'>
        <h1>Create Account</h1>
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
          <button type='submit' className='continue'>
            continue
          </button>
          <div className='detail'>
            <p>Already have an account ? </p>
            <Link to='/login' className='signin-link'>
              <p>Sign In</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
