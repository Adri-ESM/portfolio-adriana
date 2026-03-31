import { useState } from 'react'
import es from './locales/es/common.json'
import en from './locales/en/common.json'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Stack from './components/stack/Stack'
import Header from './components/header/Header'
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'

const translations = {
  es,
  en
}

function App () {
  const [language, setLanguage] = useState<'es' | 'en'>('es')
  const t = translations[language]

  return (
    <div className='min-h-screen overflow-hidden bg-zinc-950 text-zinc-100'>
      <Header
        language={language}
        toggleLanguage={() =>
          setLanguage(prev => (prev === 'es' ? 'en' : 'es'))
        }
        nav={t.nav}
      />

      <main className='relative pt-[88px]'>
        <div className='absolute inset-0 -z-10'>
          <div className='absolute left-[-120px] top-[120px] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl' />
          <div className='absolute right-[-80px] top-[200px] h-80 w-80 rounded-full bg-violet-500/10 blur-3xl' />
          <div className='absolute bottom-[-100px] left-[35%] h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl' />
        </div>
        <Hero hero={t.hero} />
        <About about={t.about} />
        <Stack stack={t.stack} />
        <Projects />
        <Experience experience={t.experience} />
        <Contact contact={t.contact} />
      </main>
    </div>
  )
}

export default App
