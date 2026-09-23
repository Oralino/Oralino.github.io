export type ProjectCategory = 'personal' | 'coursework'

export interface Project {
  /** URL segment: /projects/:slug */
  slug: string
  name: string
  category: ProjectCategory
  /** McMaster course code, coursework only (e.g. "4AI3") */
  course?: string
  summary: string
  tech: string[]
  /** Only set for public repositories */
  repoUrl?: string
}
