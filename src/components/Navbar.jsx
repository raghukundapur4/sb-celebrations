import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/siteConfig'
import BrandLogo from './BrandLogo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navLight = !scrolled

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav
        className={`container-custom mx-4 rounded-2xl px-4 transition-all duration-300 sm:mx-auto sm:px-6 lg:px-8 ${
          scrolled
            ? 'glass-nav shadow-premium'
            : 'bg-transparent'
        }`}
      >
        <div className="flex h-16 items-center justify-between">
          <BrandLogo
            variant="mark"
            imageClassName="h-10 w-auto sm:h-11"
            showText
            light={navLight || scrolled}
          />

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : navLight && !scrolled
                      ? 'text-white/80 hover:text-secondary'
                      : 'text-white/70 hover:text-primary'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary"
                  />
                )}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary ml-4 !py-2.5 !text-xs">
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-xl p-2 lg:hidden ${
              navLight && !scrolled ? 'text-white' : 'text-primary'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-20 z-40 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center gap-2 p-8 pt-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    className={`block rounded-xl px-6 py-3 text-lg font-medium ${
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-white/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link to="/contact" onClick={closeMenu} className="btn-primary mt-4">
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
