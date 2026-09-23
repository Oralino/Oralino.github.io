import { projects } from '../../data/projects.ts'
import { site } from '../../data/site.ts'
import { topTech } from '../../lib/projects.ts'
import ButtonLink from '../ui/ButtonLink.tsx'
import SpecList from '../ui/SpecList.tsx'

const personalCount = projects.filter((p) => p.category === 'personal').length
const courseworkCount = projects.length - personalCount

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto grid w-full max-w-5xl gap-8 px-4 pt-10 pb-10 sm:px-6 md:pt-16 md:pb-12 lg:grid-cols-12 lg:items-end"
    >
      <div className="flex flex-col gap-4 lg:col-span-7">
        <h1
          id="hero-title"
          className="text-4xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl lg:text-display"
        >
          {site.name}
        </h1>
        <p className="max-w-xl text-lg text-muted">{site.tagline}</p>
        <div className="pt-2">
          <ButtonLink href={site.githubUrl} icon="github">
            View GitHub profile
          </ButtonLink>
        </div>
      </div>
      <div className="lg:col-span-5">
        <SpecList
          items={[
            {
              label: 'projects',
              value: (
                <span className="tabular-nums">
                  {personalCount} personal · {courseworkCount} coursework
                </span>
              ),
            },
            { label: 'built with', value: topTech(projects, 5).join(' · ') },
            {
              label: 'source',
              value: (
                <a
                  href={site.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm font-mono text-accent underline decoration-1 underline-offset-4 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {site.githubUrl.replace('https://', '')}
                </a>
              ),
            },
          ]}
        />
      </div>
    </section>
  )
}
