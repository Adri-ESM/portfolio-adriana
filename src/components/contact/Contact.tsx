type ContactProps = {
  contact: {
    eyebrow: string
    title: string
    description: string
    items: {
      title: string
      value: string
      href: string
    }[]
  }
}
function LinkedInIcon () {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' className='h-6 w-6'>
      <path d='M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.03 2.03 0 0 0 3.2 5.03c0 1.1.9 2 2.02 2 1.12 0 2.03-.9 2.03-2A2.03 2.03 0 0 0 5.25 3ZM20.8 12.88c0-3.37-1.8-4.94-4.2-4.94-1.94 0-2.8 1.07-3.28 1.82V8.5H9.94c.04.85 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.9-1.39 1.94-1.39 1.37 0 1.92 1.05 1.92 2.58V20h3.38v-7.12Z' />{' '}
    </svg>
  )
}
function MailIcon () {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2.2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-6 w-6'
    >
      <rect x='3' y='5' width='18' height='14' rx='2' />
      <path d='m4 7 8 6 8-6' />{' '}
    </svg>
  )
}
function GlobeIcon () {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2.2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-6 w-6'
    >
      <circle cx='12' cy='12' r='9' />
      <path d='M3 12h18' />
      <path d='M12 3a15 15 0 0 1 0 18' />
      <path d='M12 3a15 15 0 0 0 0 18' />{' '}
    </svg>
  )
}
function getItemType (title: string) {
  const normalized = title.toLowerCase()
  if (normalized.includes('linkedin')) return 'linkedin'
  if (normalized.includes('gmail') || normalized.includes('mail'))
    return 'gmail'
  return 'website'
}
function Contact ({ contact }: ContactProps) {
  return (
    <section id='contact' className='scroll-mt-28 mx-auto max-w-6xl px-6 py-24'>
      <div className='mb-12 max-w-3xl'>
        <p className='text-sm uppercase tracking-[0.25em] text-zinc-500'>
          {' '}
          {contact.eyebrow}{' '}
        </p>
        <h2 className='mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl'>
          {' '}
          {contact.title}{' '}
        </h2>
        <p className='mt-6 text-base leading-8 text-zinc-300 md:text-lg'>
          {' '}
          {contact.description}{' '}
        </p>
      </div>
      <div className='grid gap-6 md:grid-cols-2'>
        {contact.items.map(item => {
          const itemType = getItemType(item.title)
          const icon =
            itemType === 'linkedin' ? (
              <LinkedInIcon />
            ) : itemType === 'gmail' ? (
              <MailIcon />
            ) : (
              <GlobeIcon />
            )
          const isMail = itemType === 'gmail'
          return (
            <a
              key={item.href}
              href={item.href}
              target={isMail ? undefined : '_blank'}
              rel={isMail ? undefined : 'noreferrer'}
              className='group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]'
            >
              <div className='relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl text-white'>
                <span className='absolute inset-0 rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee,#a78bfa,#f472b6,#facc15,#22d3ee)] opacity-40 blur-sm transition-all duration-300 group-hover:opacity-100' />
                <span className='absolute inset-[1px] rounded-2xl bg-zinc-950/95' />
                <span className='relative z-10 text-white'>{icon}</span>
              </div>
              <div>
                <p className='text-sm text-zinc-400'>{item.title}</p>
                <p className='mt-1 text-base font-medium text-white'>
                  {' '}
                  {item.value}{' '}
                </p>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
export default Contact
