import { Link } from 'react-router-dom'

import './Product.css'
import StarIcon from '@mui/icons-material/Star'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const Product = ({ item }) => {
  return (
    <div className='product'>
      <div className='info'>
        <Link to={`/products/${item.id}`} className='title'>
          <p>{item.title}</p>
        </Link>
        <p className='price'>
          <strong>$</strong>
          <strong>{item.price} </strong>
        </p>
        <div className='rating'>
          {item.rating} <StarIcon style={{ color: 'yellow' }} />
        </div>
      </div>
      <img src={item.image} alt='' />
      <button>
        <i>
          <ShoppingCartIcon style={{ marginTop: '0.5px' }} />
        </i>
        Add to Cart
      </button>
    </div>
  )
}

export default Product
