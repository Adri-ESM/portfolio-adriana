type AboutProps = {
  about: {
    eyebrow: string
    title: string
    description: string
  }
}

function About ({ about }: AboutProps) {
  return (
    <section id='about' className='scroll-mt-28 mx-auto max-w-6xl px-6 py-24'>
      <div className='grid gap-10 lg:grid-cols-[0.9fr_1.1fr]'>
        <div>
          <p className='text-sm uppercase tracking-[0.25em] text-zinc-500'>
            {about.eyebrow}
          </p>
        </div>

        <div>
          <h2 className='max-w-3xl text-3xl font-semibold leading-tight text-white md:text-4xl'>
            {about.title}
          </h2>

          <p className='mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg'>
            {about.description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
