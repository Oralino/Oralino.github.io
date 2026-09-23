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

// Gallery height caps in CSS px (DESIGN.md → Imagery): the first row fits a laptop viewport below the
// header; later images never outweigh the lead.
const LEAD_MAX_HEIGHT = 640
const REST_MAX_HEIGHT = 384

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  // Called before the early return so hook order stays stable.
  useDocumentTitle(project ? project.name : 'Page not found')

  if (!project) return <NotFoundPage />

  const courseName = project.course ? courseNames[project.course] : undefined
  const images = project.images ?? []
  const features = project.features ?? []
  // Gallery rows (DESIGN.md → Imagery): the lead image spans both columns, unless it and the next
  // image are both portrait (phone screens), which pair up. A lone image in the last row spans too,
  // so every row is flush.
  const isPortrait = (i: number) =>
    images[i] !== undefined && images[i].height > images[i].width
  const leadCount = isPortrait(0) && isPortrait(1) ? 2 : 1
  const loneLast = (images.length - leadCount) % 2 === 1
  const spans = (i: number) =>
    (i === 0 && leadCount === 1) || (loneLast && i === images.length - 1)
  const hasBody =
    images.length > 0 || Boolean(project.overview) || features.length > 0

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
                    className={`flex flex-col gap-2 ${spans(index) ? 'md:col-span-2' : ''}`}
                  >
                    <a
                      href={image.src}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center rounded-lg bg-raised p-4 focus-ring sm:p-6"
                    >
                      <img
                        src={image.src}
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
                        loading={index < leadCount ? 'eager' : 'lazy'}
                        // Definite width so the attributes reserve space before load; the height cap
                        // becomes a per-image max-width (never upscaled past the file's own width).
                        style={{
                          maxWidth: Math.min(
                            image.width,
                            Math.round(
                              (image.width *
                                (index < leadCount
                                  ? LEAD_MAX_HEIGHT
                                  : REST_MAX_HEIGHT)) /
                                image.height,
                            ),
                          ),
                        }}
                        className="mx-auto h-auto w-full rounded-md border border-border"
                      />
                      <span className="sr-only">
                        (opens full size in a new tab)
                      </span>
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

            {project.overview && (
              <section
                aria-labelledby="overview-title"
                className="flex max-w-2xl flex-col gap-4"
              >
                <h2
                  id="overview-title"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Overview
                </h2>
                <p className="text-base leading-relaxed">{project.overview}</p>
              </section>
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
