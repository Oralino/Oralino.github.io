import { Link } from 'react-router'
import { repoName } from '../../lib/projects.ts'
import type { Project } from '../../types/project.ts'
import Icon from '../ui/Icon.tsx'
import TechList from '../ui/TechList.tsx'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col gap-3 rounded-lg border border-border bg-surface p-5 transition-colors duration-150 ease-out hover:border-border-strong has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-accent sm:p-6">
      {project.repoUrl && (
        <p className="font-mono text-xs break-all text-muted">
          {repoName(project.repoUrl)}
        </p>
      )}
      <h3 className="flex items-center justify-between gap-3 text-base font-semibold">
        <Link
          to={`/projects/${project.slug}`}
          className="after:absolute after:inset-0 focus-visible:outline-none"
        >
          {project.name}
        </Link>
        <Icon
          name="arrowRight"
          className="size-4 text-muted motion-safe:transition-transform motion-safe:duration-150 motion-safe:group-hover:translate-x-0.5"
        />
      </h3>
      <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
      <div className="mt-auto pt-4">
        <TechList tech={project.tech} max={4} />
      </div>
    </article>
  )
}
