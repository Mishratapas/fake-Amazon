import { Link } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Amazon_Logo } from '../../Images'
import './Header.css'

const Header = () => {
  return (
    <nav className='header'>
      <Link to='/'>
        <img
          className='header-logo'
          src={Amazon_Logo}
          alt='amazon'
          height-='100px'
          width='200px'
        />
      </Link>
      <div className='header-option' style={{ marginRight: '-10px' }}>
        <LocationOnIcon />
      </div>
      <div className='header-option'>
        <span className='header-option1'>Hello</span>
        <span className='header-option2'>Select Your address</span>
      </div>
      <div className='search'>
        <select>
          <option>All</option>
        </select>
        <input type='text' placeholder='search' className='searchInput' />
        <SearchIcon className='searchIcon' />
      </div>
      <div className='header-nav'>
        <Link to='/login' className='header-link'>
          <div className='header-option'>
            <span className='header-option1'>Hello</span>
            <span className='header-option2'>Signin</span>
          </div>
        </Link>
        <Link to='/orders' className='header-link'>
          <div className='header-option'>
            <span className='header-option1'>Returns</span>
            <span className='header-option2'>& orders</span>
          </div>
        </Link>
        <Link to='/checkout' className='header-link'>
          <div className='header-basket'>
            <ShoppingCartIcon />
            <span className='header-option2 basket-count'>0</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
