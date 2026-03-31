type HeroProps = {
  hero: {
    role: string
    title: string
    description: string
    primaryButton: string
    secondaryButton: string
  }
}

function Hero ({ hero }: HeroProps) {
  return (
    <section
      id='home'
      className='scroll-mt-28 mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center px-6 py-10'
    >
      <div className='grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]'>
        <div className='max-w-3xl'>
          <p className='mb-4 text-sm uppercase tracking-[0.25em] text-zinc-400'>
            {hero.role}
          </p>

          <h1 className='text-5xl font-semibold tracking-tight text-white md:text-7xl'>
            {hero.title}
          </h1>

          <p className='mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg'>
            {hero.description}
          </p>

          <div className='mt-10 flex flex-wrap gap-4'>
            <button className='rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:opacity-90'>
              {hero.primaryButton}
            </button>

            <button className='rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5'>
              {hero.secondaryButton}
            </button>
          </div>
        </div>

        <div className='relative mx-auto w-full max-w-[320px] lg:-mt-8'>
          <div className='absolute -inset-4 rounded-[32px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.22),rgba(167,139,250,0.22),rgba(244,114,182,0.22),rgba(250,204,21,0.22),rgba(34,211,238,0.22))] blur-2xl' />
          <div className='relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3 backdrop-blur-sm'>
            <img
              src='/profile.png'
              alt='Adriana Sánchez'
              className='h-[440px] w-full rounded-[24px] object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
