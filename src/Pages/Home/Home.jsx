import { products, headerItems } from '../../data/ProductsData'

import { Slider, BackToTop, Product, Header } from '../../components'
import { sliderImages } from '../../Images'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Header />
      <div className='item-container'>
        {headerItems &&
          headerItems.map((item, index) => <p key={index}>{item}</p>)}
      </div>
      <div className='home'>
        <div className='home-container'>
          <Slider images={sliderImages} />
          <div className='home-row'>
            {products.slice(0, 2).map((item) => (
              <Product item={item} key={item.id} />
            ))}
          </div>
          <div className='home-row'>
            {products.slice(2, 6).map((item) => (
              <Product item={item} key={item.id} />
            ))}
          </div>
          <div style={{ marginTop: '50px' }}>
            <BackToTop />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
