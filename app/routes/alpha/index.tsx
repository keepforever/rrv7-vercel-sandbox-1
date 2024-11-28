import { Outlet } from 'react-router'

export default function Alpha() {
  return (
    <div>
      <h1>
        Alpha Index Route, serving as a layout because it has a child route, and thus, needs an <code>Outlet</code>
      </h1>

      <Outlet />
    </div>
  )
}
