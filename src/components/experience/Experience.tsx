interface ExperienceProps {
  experience: {
    eyebrow: string
    title: string
    description: string
    items: {
      role: string
      company: string
      period: string
      location: string
      description: string
    }[]
  }
}

function Experience ({ experience }: ExperienceProps) {
  return (
    <section
      id='experience'
      className='scroll-mt-28 mx-auto max-w-6xl px-6 py-24'
    >
      <div className='mb-12 max-w-3xl'>
        <p className='text-sm uppercase tracking-[0.25em] text-zinc-500'>
          {experience.eyebrow}
        </p>
        <h2 className='mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl'>
          {experience.title}
        </h2>
        <p className='mt-6 text-base leading-8 text-zinc-300 md:text-lg'>
          {experience.description}
        </p>
      </div>
      <div className='space-y-6'>
        {experience.items.map(item => (
          <article
            key={`${item.company}-${item.role}`}
            className='rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm'
          >
            <div className='flex flex-col gap-3 md:flex-row md:items-start md:justify-between'>
              <div>
                <h3 className='text-xl font-semibold text-white'>
                  {item.role}
                </h3>
                <p className='mt-1 text-sm text-zinc-400'>{item.company}</p>
              </div>
              <div className='text-sm text-zinc-400 md:text-right'>
                <p>{item.period}</p>
                <p>{item.location}</p>
              </div>
            </div>
            <p className='mt-5 max-w-4xl text-sm leading-7 text-zinc-300'>
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
