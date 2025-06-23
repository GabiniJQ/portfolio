import Footer from '@/shared/components/Footer'
import Navbar from '@/shared/components/Navbar'
import ScrollToTop from '@/shared/components/scrollToTop'
import SpotlightBackground from '@/shared/components/Spotlight'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />

      <main className='flex-1 p-6 max-w-[1200px] sm:px-24 sm:mx-auto 2xl:px-40'>
        <Outlet />
        
        <ScrollToTop />
      </main>

      <Footer />
      <SpotlightBackground />
    </div>
  )
}

export default Layout
