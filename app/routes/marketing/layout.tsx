import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-gray-900">Marketing Layout</h1>
      <p>outlet below</p>
      <Outlet />
    </div>
  )
}
