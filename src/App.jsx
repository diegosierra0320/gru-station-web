import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Products from './pages/products/Products'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carta' element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default App
