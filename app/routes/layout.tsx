import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div>
      <h1>Outermost Layout</h1>
      <Outlet />
    </div>
  )
}
