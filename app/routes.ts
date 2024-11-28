import { type RouteConfig, index, layout, route } from '@react-router/dev/routes'

export default [
  // foo
  layout('routes/layout.tsx', [index('routes/home.tsx')]),
] satisfies RouteConfig
