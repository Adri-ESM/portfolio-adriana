type HeaderProps = {
  language: 'es' | 'en'
  toggleLanguage: () => void
  nav: {
    home: string
    about: string
    projects: string
    experience: string
    contact: string
  }
}

function Header ({ language, toggleLanguage, nav }: HeaderProps) {
  const navItems = [
    { label: nav.home, href: '#home' },
    { label: nav.about, href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: nav.projects, href: '#projects' },
    { label: nav.experience, href: '#experience' },
    { label: nav.contact, href: '#contact' }
  ]

  return (
    <header className='fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
        <a
          href='#home'
          className='cursor-pointer text-sm font-semibold tracking-wide text-zinc-100 no-underline'
        >
          Adriana Sánchez
        </a>

        <ul className='hidden gap-3 text-sm text-zinc-300 md:flex'>
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className='group relative inline-flex cursor-pointer overflow-hidden rounded-full px-4 py-2 no-underline transition-all duration-300'
              >
                <span className='absolute inset-0 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee,#a78bfa,#f472b6,#facc15,#22d3ee)] opacity-0 blur-md transition-all duration-300 group-hover:opacity-100' />
                <span className='absolute inset-[1px] rounded-full border border-white/10 bg-zinc-950/95 transition-all duration-300 group-hover:border-white/20' />
                <span className='relative z-10 text-zinc-300 transition-colors duration-300 group-hover:text-white'>
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleLanguage}
          className='group relative cursor-pointer overflow-hidden rounded-full px-4 py-2 text-xs text-zinc-200 transition-all duration-300'
        >
          <span className='absolute inset-0 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee,#a78bfa,#f472b6,#facc15,#22d3ee)] opacity-0 blur-md transition-all duration-300 group-hover:opacity-100' />
          <span className='absolute inset-[1px] rounded-full border border-white/15 bg-zinc-950/95' />
          <span className='relative z-10'>
            {language === 'es' ? 'ES | EN' : 'EN | ES'}
          </span>
        </button>
      </nav>

      <div className='h-[4px] w-full bg-gradient-to-r from-transparent via-cyan-300 via-fuchsia-400 to-transparent opacity-100 blur-[1px] animate-pulse' />
    </header>
  )
}

export default Header
