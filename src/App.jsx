import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className="container">
            <nav>
                <img src="image/logo_putih.JPG" className="logo" />
                <ul>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="portofolio.html">Portofolio</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </nav>
            <div className="content">
                <h1>Witness <br /> the transformation of visions into reality</h1>
                <p>Explore our diverse portofolio showcasing successful collaborations between form and function, design and construction</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
