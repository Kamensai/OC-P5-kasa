import { Link } from 'react-router'
import LOGO_desktop from '../../assets/LOGO_desktop.png'
function Header() {
  return (
    <header>
      <Link to="/">
        <img src={LOGO_desktop} alt="Logo Kasa" />
      </Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header
