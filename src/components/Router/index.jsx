import { Routes, Route } from 'react-router'
import RouterLayout from '../../layouts/RouteLayout/index.jsx'
import Home from '../../pages/Home'
import About from '../../pages/About/index.jsx'
import Error from '../../pages/Error'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route index element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
