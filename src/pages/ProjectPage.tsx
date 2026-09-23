import { Link, useParams } from 'react-router'
import ButtonLink from '../components/ui/ButtonLink.tsx'
import CourseBadge from '../components/ui/CourseBadge.tsx'
import Icon from '../components/ui/Icon.tsx'
import SpecList, { type SpecItem } from '../components/ui/SpecList.tsx'
import TechList from '../components/ui/TechList.tsx'
import { projects } from '../data/projects.ts'
import { courseNames } from '../data/site.ts'
import { useDocumentTitle } from '../hooks/useDocumentTitle.ts'
import { repoName } from '../lib/projects.ts'
import NotFoundPage from './NotFoundPage.tsx'

const inlineLink = 'link-inline focus-ring'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  // Called before the early return so hook order stays stable.
  useDocumentTitle(project ? project.name : 'Page not found')

  if (!project) return <NotFoundPage />

  const courseName = project.course ? courseNames[project.course] : undefined
  const images = project.images ?? []
  const features = project.features ?? []
  const hasBody = images.length > 0 || features.length > 0

  const specs: SpecItem[] = [
    {
      label: 'type',
      value: project.course ? 'Course project' : 'Personal project',
    },
    ...(project.course
      ? [
          {
            label: 'course',
            value: `${project.course} · ${courseName}`,
          },
        ]
      : []),
    { label: 'stack', value: <TechList tech={project.tech} /> },
    {
      label: 'repository',
      value: project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className={`font-mono text-xs break-all ${inlineLink}`}
        >
          {repoName(project.repoUrl)}
        </a>
      ) : (
        <span className="text-muted">private</span>
      ),
    },
    ...(project.releaseUrl
      ? [
          {
            label: 'release',
            value: (
              <a
                href={project.releaseUrl}
                target="_blank"
                rel="noreferrer"
                className={inlineLink}
              >
                Latest release
              </a>
            ),
          },
        ]
      : []),
  ]

  return (
    <article className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 pt-8 pb-16 sm:px-6 md:pt-10 md:pb-24">
      <header className="flex flex-col gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 self-start link-ghost text-label font-medium focus-ring"
        >
          <Icon name="arrowLeft" />
          All projects
        </Link>
        <p className="flex items-center gap-2 pt-4 text-xs text-muted">
          {project.course ? (
            <>
              <CourseBadge code={project.course} />
              {courseName}
            </>
          ) : (
            <span className="font-mono">Personal project</span>
          )}
        </p>
        <h1 className="text-2xl font-semibold tracking-[-0.03em] sm:text-title">
          {project.name}
        </h1>
        <p className="max-w-2xl text-lg text-muted">{project.summary}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          {project.releaseUrl ? (
            <>
              <ButtonLink href={project.releaseUrl} icon="download">
                Download latest release
              </ButtonLink>
              {project.repoUrl && (
                <ButtonLink
                  href={project.repoUrl}
                  variant="secondary"
                  icon="github"
                >
                  View repository
                </ButtonLink>
              )}
            </>
          ) : (
            project.repoUrl && (
              <ButtonLink href={project.repoUrl} icon="github">
                View repository
              </ButtonLink>
            )
          )}
        </div>
      </header>

      <div className="grid gap-10 border-t border-border pt-10 lg:grid-cols-12">
        <aside
          aria-label="Project details"
          className={`lg:self-start ${hasBody ? 'lg:sticky lg:top-24 lg:order-2 lg:col-span-4' : 'max-w-xl lg:col-span-12'}`}
        >
          <SpecList items={specs} />
        </aside>

        {hasBody && (
          <div className="flex min-w-0 flex-col gap-10 lg:order-1 lg:col-span-8">
            {images.length > 0 && (
              <div className="grid gap-4 md:grid-cols-2">
                {images.map((image, index) => (
                  <figure
                    key={image.src}
                    className={`flex flex-col gap-2 ${index === 0 ? 'md:col-span-2' : ''}`}
                  >
                    <a
                      href={image.src}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-lg bg-raised p-4 focus-ring sm:p-6"
                    >
                      <img
                        src={image.src}
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        className="h-auto w-full rounded-md border border-border"
                      />
                    </a>
                    {image.caption && (
                      <figcaption className="text-xs text-muted">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            )}

            {features.length > 0 && (
              <section
                aria-labelledby="features-title"
                className="flex max-w-2xl flex-col gap-4"
              >
                <h2
                  id="features-title"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Features
                </h2>
                <ul className="flex flex-col gap-2">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm leading-relaxed"
                    >
                      <span aria-hidden="true" className="text-muted">
                        –
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
