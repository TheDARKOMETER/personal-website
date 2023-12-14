import React, { useEffect, useState } from 'react'


export default function Header() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isMobileview, setIsMobileView] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 640)
      !isMobileview && setMobileMenuVisible(false)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible)
  }

  return (
    <header className='mt-4 text-white '>
      <section className={`custom-max-width mx-auto flex ${mobileMenuVisible && isMobileview ? 'flex-col' : 'justify-between items-center'} `}>

        <div className='w-full heading-wrapper flex justify-between items-center'>
          <h1 className='text-2xl font-medium'>Vonchez</h1>
          <button className={`${isMobileview ? 'inline' : 'hidden'}`} onClick={toggleMenu} id='nav-burger'>
            <span className="material-symbols-outlined">
              menu
            </span>
          </button>
        </div>
        {/* Desktop navbar */}
        <nav className='hidden desktop-nav sm:flex' id='navbar'>
          <ul>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>GitHub</a></li>
            <li><a href='#'>Projects</a></li>
          </ul>
        </nav>


        {/* Mobile Menu */}
        <div className={`expand-container ${mobileMenuVisible && isMobileview ? 'expanded' : ''}`}>
          <nav className={`mobile-nav ${mobileMenuVisible && isMobileview ? 'flex justify-center expanded' : 'hidden'}`} id='mobile-navbar'>
            <ul>
              <li><a href='#'>Contact</a></li>
              <li><a href='#'>GitHub</a></li>
              <li><a href='#'>Projects</a></li>
            </ul>
          </nav>
        </div>

      </section>
    </header>
  )
}
