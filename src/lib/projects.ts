import type { Project } from '../types/project.ts'

/** "https://github.com/Oralino/PowerTrayOptimizer" → "PowerTrayOptimizer" */
export function repoName(repoUrl: string) {
  return repoUrl.replace(/\/+$/, '').split('/').pop() ?? repoUrl
}

/** Tech tags used by the most projects, most common first (ties keep first-seen order). */
export function topTech(projects: Project[], count: number) {
  const counts = new Map<string, number>()
  for (const project of projects) {
    for (const tech of project.tech)
      counts.set(tech, (counts.get(tech) ?? 0) + 1)
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([tech]) => tech)
}

export function plural(count: number, word: string) {
  return `${count} ${word}${count === 1 ? '' : 's'}`
}
