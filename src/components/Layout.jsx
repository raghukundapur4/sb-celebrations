import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import SEO from './SEO'
import StructuredData from './StructuredData'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  const location = useLocation()

  return (
    <>
      <StructuredData />
      <SEO pathname={location.pathname} />
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
