import { Routes, Route } from 'react-router'
import RouterLayout from '../../layouts/RouteLayout/index.jsx'
import Home from '../../pages/Home'
import About from '../../pages/About/index.jsx'
import Error from '../../pages/Error'
import Logement from '../../pages/Logement/index.jsx'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
