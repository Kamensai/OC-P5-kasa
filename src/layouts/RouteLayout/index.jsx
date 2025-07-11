import { Outlet } from 'react-router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function RouterLayout() {
  return (
    <div className="root-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RouterLayout
