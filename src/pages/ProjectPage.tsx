import { useParams } from 'react-router'
import { projects } from '../data/projects.ts'
import NotFoundPage from './NotFoundPage.tsx'

// Placeholder until DESIGN.md is approved: proves routing and data wiring only.
export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <NotFoundPage />

  return (
    <main>
      <h1>{project.name}</h1>
      <p>{project.summary}</p>
    </main>
  )
}
