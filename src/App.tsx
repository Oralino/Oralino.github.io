import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import HomePage from './pages/HomePage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import ProjectPage from './pages/ProjectPage.tsx'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/projects/:slug', element: <ProjectPage /> },
  { path: '*', element: <NotFoundPage /> },
])

export default function App() {
  return <RouterProvider router={router} />
}
