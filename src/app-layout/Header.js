import React from 'react'
import Navs from '../components/common/Navs'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/")
  }
  return (<>
    <header className="site-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <img src="assets/images/logo.png" alt="logo" onClick={() => { goToHome() }} />
          <Navs />
        </div>
      </nav>
    </header>

  </>)
}
export default Header