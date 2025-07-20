import { NavLink } from 'react-router'
import LOGO_desktop from '../../assets/LOGO_desktop.png'
function Header() {
  return (
    <header>
      <NavLink to="/">
        <img src={LOGO_desktop} alt="Logo Kasa" />
      </NavLink>
      <nav>
        <NavLink to="/" end className="nav-link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="nav-link">
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
