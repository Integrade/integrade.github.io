import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'
import Home from './pages/Home'
import Portofolio from './pages/Portofolio'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <NavbarComponent/>

      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/portofolio' Component={Portofolio}/>
        <Route path='/contact' Component={Contact}/>
      </Routes>

      <FooterComponent/>
    </div>
  )
}

export default App