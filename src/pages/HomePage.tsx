import CourseworkRow from '../components/sections/CourseworkRow.tsx'
import FeaturedCard from '../components/sections/FeaturedCard.tsx'
import Hero from '../components/sections/Hero.tsx'
import ProjectCard from '../components/sections/ProjectCard.tsx'
import ProjectSection from '../components/sections/ProjectSection.tsx'
import { projects } from '../data/projects.ts'
import { useDocumentTitle } from '../hooks/useDocumentTitle.ts'
import { plural } from '../lib/projects.ts'

// Featured projects appear only in "Selected work", not again in their regular section.
const featured = projects.filter((p) => p.featured)
const personal = projects.filter(
  (p) => !p.featured && p.category === 'personal',
)
const coursework = projects.filter(
  (p) => !p.featured && p.category === 'coursework',
)

export default function HomePage() {
  useDocumentTitle()

  return (
    <>
      <Hero />
      <ProjectSection
        id="work"
        title="Selected work"
        count={plural(featured.length, 'project')}
      >
        <div className="flex flex-col gap-4">
          {featured.map((project) => (
            <FeaturedCard key={project.slug} project={project} />
          ))}
        </div>
      </ProjectSection>
      <ProjectSection
        id="projects"
        title="Projects"
        count={plural(personal.length, 'project')}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {personal.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </ProjectSection>
      <ProjectSection
        id="coursework"
        title="Coursework"
        count={`${plural(coursework.length, 'course project')} · McMaster`}
      >
        <ul className="divide-y divide-border border-b border-border">
          {coursework.map((project) => (
            <CourseworkRow key={project.slug} project={project} />
          ))}
        </ul>
      </ProjectSection>
    </>
  )
}
