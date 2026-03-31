type ProjectCard = {
  title: string
  description: string
  tags: string[]
  image?: string
  liveUrl?: string
}

function Projects () {
  const projectCards: ProjectCard[] = [
    {
      title: 'Altafid',
      description:
        'Frontend development focused on scalable interfaces, complex tables, forms, editing flows, and user-centered product experiences.',
      tags: ['React', 'TypeScript', 'Ant Design', 'Formily', 'GraphQL'],
      image: '/projects/altafid.png',
      liveUrl: 'https://www.altafid.com/es/'
    },
    {
      title: 'E-commerce Project',
      description:
        'Personal project built to strengthen frontend architecture, reusable components, and product thinking.',
      tags: ['React', 'TypeScript', 'UI', 'State Management']
    },
    {
      title: 'Portfolio',
      description:
        'Personal website designed to present my experience, projects, and technical profile in a modern and professional way.',
      tags: ['React', 'Vite', 'Tailwind']
    }
  ]

  return (
    <section
      id='projects'
      className='scroll-mt-28 mx-auto max-w-6xl px-6 py-24'
    >
      <div className='mb-12 max-w-3xl'>
        <p className='text-sm uppercase tracking-[0.25em] text-zinc-500'>
          Projects
        </p>

        <h2 className='mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl'>
          Featured projects
        </h2>

        <p className='mt-6 text-base leading-8 text-zinc-300 md:text-lg'>
          A selection of projects that reflect my experience building
          interfaces, solving UI challenges, and working on real product flows.
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {projectCards.map(project => (
          <article
            key={project.title}
            className='group rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]'
          >
            <div className='mb-6 overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900 p-2'>
              {project.image ? (
                <div className='overflow-hidden rounded-xl border border-white/10 bg-zinc-950'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='h-48 w-full rounded-[16px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]'
                  />
                </div>
              ) : (
                <div className='flex h-56 items-end rounded-xl border border-white/10 bg-zinc-950 p-4'>
                  <span className='text-sm text-zinc-400'>Project preview</span>
                </div>
              )}
            </div>

            <h3 className='text-xl font-semibold text-white'>
              {project.title}
            </h3>

            <p className='mt-4 text-sm leading-7 text-zinc-300'>
              {project.description}
            </p>

            <div className='mt-6 flex flex-wrap gap-3'>
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className='rounded-full border border-white/10 bg-zinc-900/80 px-3 py-1 text-xs text-zinc-200'
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
