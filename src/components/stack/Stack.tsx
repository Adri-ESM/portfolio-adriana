type StackProps = {
  stack: {
    eyebrow: string
    title: string
    description: string
    groups: {
      title: string
      items: string[]
    }[]
  }
}

function Stack ({ stack }: StackProps) {
  return (
    <section id='stack' className='scroll-mt-28 mx-auto max-w-6xl px-6 py-24'>
      <div className='mb-12 max-w-3xl'>
        <p className='text-sm uppercase tracking-[0.25em] text-zinc-500'>
          {stack.eyebrow}
        </p>

        <h2 className='mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl'>
          {stack.title}
        </h2>

        <p className='mt-6 text-base leading-8 text-zinc-300 md:text-lg'>
          {stack.description}
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        {stack.groups?.map(group => (
          <div
            key={group.title}
            className='rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm'
          >
            <h3 className='text-lg font-semibold text-white'>{group.title}</h3>

            <div className='mt-5 flex flex-wrap gap-3'>
              {group.items?.map(item => (
                <span
                  key={item}
                  className='group relative overflow-hidden rounded-full px-4 py-2 text-sm text-zinc-200'
                >
                  <span className='absolute inset-0 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee,#a78bfa,#f472b6,#facc15,#22d3ee)] opacity-20 blur-md transition-all duration-300 group-hover:opacity-100' />
                  <span className='absolute inset-[1px] rounded-full border border-white/10 bg-zinc-900/95' />
                  <span className='relative z-10'>{item}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stack
