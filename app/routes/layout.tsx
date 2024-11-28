import { Link, Outlet, useLocation } from 'react-router'

export default function Layout() {
  const location = useLocation()

  // Helper to determine if a link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      className={`rounded-md px-4 py-2 transition-colors ${
        isActive(to) ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {children}
    </Link>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo/Brand */}
            <Link to="/" className="text-xl font-bold text-gray-900">
              Your App
            </Link>

            {/* Navigation */}
            <nav className="flex space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/monkey">Monkey</NavLink>
              <NavLink to="/alpha">Alpha</NavLink>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© {new Date().getFullYear()} Your App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
