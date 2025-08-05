import { Routes, Route } from 'react-router'
import RouterLayout from '../../layouts/RouteLayout/index.jsx'
import Home from '../../pages/Home'
import About from '../../pages/About/index.jsx'
import Error from '../../pages/Error'
import Logement from '../../pages/Logement/index.jsx'

// Composant AppRouter : définit toutes les routes de l'application avec leur layout principal

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Page de détail d'un logement (paramètre id dans l'URL) */}
        <Route path="/logement/:id" element={<Logement />} />

        {/* Page d'erreur pour toute route non trouvée */}
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
