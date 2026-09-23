import type { CourseCode } from '../data/site.ts'

export type ProjectCategory = 'personal' | 'coursework'

export interface ProjectImage {
  src: string
  width: number
  height: number
  /** States what the image shows, not "screenshot" */
  alt: string
  caption?: string
}

export interface Project {
  /** URL segment: /projects/:slug */
  slug: string
  name: string
  category: ProjectCategory
  /** McMaster course code, coursework only (e.g. "4AI3") */
  course?: CourseCode
  summary: string
  tech: string[]
  /** Only set for public repositories */
  repoUrl?: string
  /** Latest GitHub release with downloadable builds */
  releaseUrl?: string
  /** Shown in "Selected work" on the home page instead of its regular section */
  featured?: boolean
  features?: string[]
  images?: ProjectImage[]
}
