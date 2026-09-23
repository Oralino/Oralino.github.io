import { Link } from 'react-router'
import type { Project } from '../../types/project.ts'
import CourseBadge from '../ui/CourseBadge.tsx'
import Icon from '../ui/Icon.tsx'

export default function CourseworkRow({ project }: { project: Project }) {
  return (
    <li className="group relative flex flex-col gap-3 py-5 transition-colors duration-150 ease-out hover:bg-surface has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-accent md:flex-row md:items-start md:gap-4 md:px-3">
      <div className="md:w-20 md:shrink-0">
        {project.course && <CourseBadge code={project.course} />}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h3 className="text-base font-semibold">
          <Link
            to={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {project.name}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
        <p className="font-mono text-xs text-muted">
          {project.tech.join(' · ')}
        </p>
      </div>
      <Icon
        name="chevronRight"
        className="mt-1 hidden size-4 text-muted motion-safe:transition-transform motion-safe:duration-150 motion-safe:group-hover:translate-x-0.5 md:block"
      />
    </li>
  )
}
