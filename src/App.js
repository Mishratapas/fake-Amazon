import { Route, Routes } from 'react-router-dom'

import { Product } from './components'
import { Home, LogIn, Register } from './Pages'
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
