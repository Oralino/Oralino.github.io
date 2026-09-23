import { Link } from 'react-router'
import { repoName } from '../../lib/projects.ts'
import type { Project } from '../../types/project.ts'
import CourseBadge from '../ui/CourseBadge.tsx'
import Icon from '../ui/Icon.tsx'
import TechList from '../ui/TechList.tsx'

export default function FeaturedCard({ project }: { project: Project }) {
  const image = project.images?.[0]

  return (
    <article className="group relative grid overflow-hidden rounded-lg border border-border bg-surface transition-colors duration-150 ease-out hover:border-border-strong has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-accent md:grid-cols-12">
      {image && (
        <div className="aspect-[16/10] border-b border-border bg-raised p-4 sm:p-6 md:col-span-7 md:border-r md:border-b-0">
          <img
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            className="size-full object-contain"
          />
        </div>
      )}
      <div
        className={`flex flex-col gap-3 p-5 sm:p-6 ${image ? 'md:col-span-5' : 'md:col-span-12'}`}
      >
        <p className="flex items-center gap-2 font-mono text-xs text-muted">
          {project.course ? (
            <CourseBadge code={project.course} />
          ) : (
            'Personal project'
          )}
        </p>
        <h3 className="text-lg font-semibold">
          <Link
            to={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {project.name}
          </Link>
        </h3>
        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          {project.summary}
        </p>
        <TechList tech={project.tech} max={4} />
        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-2">
          {project.repoUrl && (
            <span className="font-mono text-xs text-muted">
              {repoName(project.repoUrl)}
            </span>
          )}
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
            View project
            <Icon
              name="arrowRight"
              className="size-4 motion-safe:transition-transform motion-safe:duration-150 motion-safe:group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </article>
  )
}
