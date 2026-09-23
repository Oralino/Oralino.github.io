import { Outlet, ScrollRestoration } from 'react-router'
import Footer from './Footer.tsx'
import Header from './Header.tsx'

export default function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
