import { Link } from 'react-router'
import { projects } from '../data/projects.ts'

// Placeholder until DESIGN.md is approved: proves routing and data wiring only.
export default function HomePage() {
  return (
    <main>
      <h1>Portfolio</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link to={`/projects/${project.slug}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
